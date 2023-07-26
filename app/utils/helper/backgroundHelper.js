// import * as bodyPix from "@tensorflow-models/body-pix";

let drawBlurId, drawImageId, drawScreenSharedId
let stop = false

const cropImageWithComposite = (
  ctx,
  canvas,
  image,
  composite,
  sourceX,
  sourceY,
  destinationX,
  destinationY
) => {
  ctx.globalCompositeOperation = composite
  ctx.drawImage(
    image,
    0,
    0,
    (image.naturalHeight * 4) / 3,
    image.naturalHeight,
    0,
    0,
    canvas.width,
    canvas.height
  )
}

const fitImageOn = function (canvas, imageObj, ctx) {
  let imageAspectRatio = imageObj.width / imageObj.height
  let canvasAspectRatio = canvas.width / canvas.height
  let renderableHeight, renderableWidth, xStart, yStart

  // If image's aspect ratio is less than canvas's we fit on height
  // and place the image centrally along widthz
  if (imageAspectRatio < canvasAspectRatio) {
    renderableHeight = canvas.height
    renderableWidth = imageObj.width * (renderableHeight / imageObj.height)
    xStart = (canvas.width - renderableWidth) / 2
    yStart = 0
  }

  // If image's aspect ratio is greater than canvas's we fit on width
  // and place the image centrally along height
  else if (imageAspectRatio > canvasAspectRatio) {
    renderableWidth = canvas.width
    renderableHeight = imageObj.height * (renderableWidth / imageObj.width)
    xStart = 0
    yStart = (canvas.height - renderableHeight) / 2
  }

  // Happy path - keep aspect ratio
  else {
    renderableHeight = canvas.height
    renderableWidth = canvas.width
    xStart = 0
    yStart = 0
  }
  drawWithComposite(
    ctx,
    'destination-over',
    imageObj,
    xStart,
    yStart,
    renderableWidth,
    renderableHeight
  )
  // ctx.drawImage(imageObj, xStart, yStart, renderableWidth, renderableHeight);
}

const drawWithComposite = (
  ctx,
  composite,
  image,
  xStart,
  yStart,
  width,
  height
) => {
  ctx.globalCompositeOperation = composite
  ctx.drawImage(image, xStart, yStart, width, height)
}

const renderImageDatatoCanvas = (canvas, width, height, imageData) => {
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  ctx.putImageData(imageData, 0, 0)
}

export const clearEffect = (canvas, setEffects) => {
  stop = true
  cancelAnimationFrame(drawBlurId)
  cancelAnimationFrame(drawImageId)
  cancelAnimationFrame(drawScreenSharedId)
  drawBlurId = drawImageId = drawScreenSharedId = null
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  setEffects({ blur: false, image: false, screen: false })
  return
}

export const drawBlur = (webcam, canvas, net, segmentConfig) => {
  function drawMask() {
    if (Boolean(webcam) && Boolean(canvas)) {
      net.segmentPerson(webcam, segmentConfig).then((person) => {
        const backgroundBlurAmount = 6
        const edgeBlurAmount = 6
        const flipHorizontal = false

        bodyPix.drawBokehEffect(
          canvas,
          webcam,
          person,
          backgroundBlurAmount,
          edgeBlurAmount,
          flipHorizontal
        )
        if (stop) {
          drawBlurId = null
          return
        }
        if (!stop) {
          drawBlurId = requestAnimationFrame(drawMask)
        }
      })
    }
  }
  if (!stop) {
    drawBlurId = requestAnimationFrame(drawMask)
  } else {
    setTimeout(() => {
      stop = false
      drawBlurId = requestAnimationFrame(drawMask)
    }, 1000)
  }
}

export const drawImage = (
  webcam,
  canvas,
  image,
  model,
  segmentConfig,
  isOn,
  setEffects
) => {
  if (model) {
    const personMaskCanvas = document.createElement('canvas')
    // const imageCanvas = document.createElement("canvas");

    function drawMask() {
      const context = canvas.getContext('2d')

      model.segmentPerson(webcam, segmentConfig).then((segmentation) => {
        const mask = bodyPix.toMask(
          segmentation,
          { r: 0, g: 0, b: 0, a: 255 },
          { r: 0, g: 0, b: 0, a: 0 }
        )
        renderImageDatatoCanvas(
          personMaskCanvas,
          webcam.width,
          webcam.height,
          mask
        )
        // renderImageDatatoCanvas(imageCanvas, webcam.width, webcam.height, image)
        context.save()
        context.drawImage(webcam, 0, 0, canvas.width, canvas.height)
        drawWithComposite(
          context,
          'destination-in',
          personMaskCanvas,
          0,
          0,
          canvas.width,
          canvas.height
        )
        // fitImageOn(canvas, image, context)
        cropImageWithComposite(context, canvas, image, 'destination-over')
        // drawWithComposite(context, "destination-over", image, 0, 0, canvas.width, canvas.height)
        context.restore()
        if (stop) {
          drawImageId = null
          return
        }
        if (!stop) {
          drawImageId = requestAnimationFrame(drawMask)
        }
      })
    }
    if (!stop) {
      drawImageId = requestAnimationFrame(drawMask)
    } else {
      setTimeout(() => {
        stop = false
        drawImageId = requestAnimationFrame(drawMask)
      }, 1000)
    }
    setEffects((prev) => ({ ...prev, image: true }))
  }
}

export const drawScreenShared = async (
  webcam,
  canvas,
  videoPreview,
  net,
  segmentConfig,
  isOn,
  setEffects
) => {
  stop = false
  if (webcam && canvas && videoPreview && net) {
    const ctx = canvas.getContext('2d')
    const tempCanvas = document.createElement('canvas')
    const tempCtx = tempCanvas.getContext('2d')
    tempCanvas.height = webcam.height
    tempCanvas.width = webcam.width
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    async function drawMask() {
      const person = await net.segmentPerson(webcam, segmentConfig)
      const mask = bodyPix.toMask(person)

      ctx.drawImage(videoPreview, 0, 0, canvas.width, canvas.height)
      ctx.save()
      tempCtx.putImageData(mask, 0, 0)
      ctx.globalCompositeOperation = 'destination-in'
      ctx.drawImage(tempCanvas, 0, 0, webcam.width, webcam.height)
      ctx.restore()
      if (!stop) {
        requestAnimationFrame(drawMask)
      }
    }
    requestAnimationFrame(drawMask)
  }
}
