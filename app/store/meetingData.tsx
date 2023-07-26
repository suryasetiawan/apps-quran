import update from 'immutability-helper'

const initialstate = () => {
  return {
    status: '',
    newMeeting: {},
    meetingRoom: {},
    newWaitingRoom: {},
    listWaitingRoom: [],
    meetingList: [],
    isLoading: false,
    socketOwnerId: '',
    joiningEmail: '',
    roomUserSocketId: '',
    meetingRoomUsers: [],
    todaysMeeting: [],
    enableMic: true,
    enableVideo: true,
    roomOwnerSocketId: '',
    roomCohostSocketId: '',
    meetingSchedule: [],
    userDetails: null,
    userContacts: [],
    meetingRoomPermissions: [],
    meetingDetails: null,
    chatToken: '',
    roomSetupStream: [],
    roomMessages: [],
    videoEffect: '',
    selectedMicFromSetup: '',
    selectedAudioFromSetup: '',
    selectedVideoFromSetup: '',
    modalPreviewFile: null,
    myEvents: [],
    reFetch: false,
    meetingAttendee: null,
    allMeeting: null,
    socketIdOnMeetingRoomUser: null,
    peerIdMeetingRoomUser: null,
    coHostSocketId: null
  }
}

type Action = {
  type: string
  payload?: any
}

export default (state: any = initialstate(), action: Action) => {
  // console.log('action payload', action.payload)

  switch (action.type) {
    case 'SET_IS_LOADING':
      return update(state, {
        isLoading: { $set: action.payload.isLoading }
      })
    case 'SET_ENABLE_MIC':
      return update(state, {
        enableMic: { $set: action.payload.enableMic }
      })
    case 'SET_ENABLE_VIDEO':
      return update(state, {
        enableVideo: { $set: action.payload.enableVideo }
      })
    case 'SET_USER_DETAILS':
      return update(state, {
        userDetails: { $set: action.payload.userDetails }
      })
    case 'SET_GET_TODAYS_MEETING':
      return update(state, {
        todaysMeeting: { $set: action.payload.todaysMeeting }
      })
    case 'SET_GET_ALL_MEETING_SCHEDULE':
      return update(state, {
        meetingSchedule: { $set: action.payload.meetingSchedule }
      })
    case 'SET_GET_MEETING_BY_ID':
      return update(state, {
        meetingDetails: { $set: action.payload }
      })
    case 'SET_CREATED_MEETING':
      return update(state, {
        newMeeting: { $set: action.payload.newMeeting }
      })
    case 'SET_CREATE_MEETING_ROOM':
      return update(state, {
        meetingRoomUsers: { $set: action.payload.meetingRoomUsers }
      })
    case 'SET_GET_MEETING_ROOM':
      return update(state, {
        meetingRoom: { $set: action.payload }
      })
    case 'SET_MEETING_ROOM_PERMISSIONS':
      return update(state, {
        meetingRoomPermissions: { $set: action.payload }
      })
    case 'SET_MEETING_ROOM_USERS':
      return update(state, {
        meetingRoomUsers: { $set: action.payload }
      })
    case 'SET_UPDATE_SOCKET_OWNER_ID':
      return update(state, {
        socketOwnerId: { $set: action.payload.socketOwnerId }
      })
    case 'SET_ROOM_OWNER_SOCKET_ID':
      return update(state, {
        roomOwnerSocketId: { $set: action.payload.roomOwnerSocketId }
      })
    case 'SET_CREATE_WAITING_ROOM':
      return update(state, {
        newWaitingRoom: { $set: action.payload.newWaitingRoom }
      })
    case 'SET_JOINING_EMAIL':
      return update(state, {
        joiningEmail: { $set: action.payload.joiningEmail }
      })
    case 'SET_USER_CONTACTS':
      return update(state, {
        userContacts: { $set: action.payload.userContacts }
      })
    case 'SET_CREATE_MEETING_ATTENDEES':
      return update(state, {
        meetingAttendee: { $set: action.payload.meetingAttendee }
      })
    case 'SET_CREATE_MEETING_ROOM_USER':
      return update(state, {
        meetingRoomUsers: { $set: action.payload }
      })
    case 'SET_UPDATE_MEETING_ROOM_USER_NAME':
      return update(state, {
        meetingRoomUsers: { $set: action.payload.meetingRoomUsers }
      })
    case 'SET_UPDATE_MEETING_ROOM_USER_STATUS':
      return update(state, {
        meetingRoomUsers: { $set: action.payload.meetingRoomUsers }
      })
    case 'SET_CHAT_TOKEN':
      return update(state, {
        chatToken: { $set: action.payload.chatToken }
      })
    case 'SET_ROOM_MESSAGES':
      return update(state, {
        roomMessages: { $set: action.payload.roomMessages }
      })
    case 'PUSH_NEW_MESSAGE':
      return update(state, {
        roomMessages: { $set: action.payload.roomMessages }
      })
    case 'PUSH_EDIT_MESSAGE':
      return update(state, {
        roomMessages: { $set: action.payload.roomMessages }
      })
    case 'CLEAN_ROOM_MESSAGES':
      return update(state, {
        roomMessages: { $set: action.payload.roomMessages }
      })
    case 'SET_ROOM_SETUP_STREAM':
      return update(state, {
        roomSetupStream: { $set: action.payload.roomSetupStream }
      })
    case 'SET_VIDEO_EFFECT':
      return update(state, {
        videoEffect: { $set: action.payload.videoEffect }
      })
    case 'SET_SELECTED_MIC':
      return update(state, {
        selectedMicFromSetup: { $set: action.payload.selectedMicFromSetup }
      })
    case 'SET_SELECTED_AUDIO':
      return update(state, {
        selectedAudioFromSetup: { $set: action.payload.selectedAudioFromSetup }
      })
    case 'SET_SELECTED_VIDEO':
      return update(state, {
        selectedVideoFromSetup: { $set: action.payload.selectedVideoFromSetup }
      })
    case 'SET_UPDATE_WAITING_ROOM':
      return update(state, {
        newWaitingRoom: { $set: action.payload.newWaitingRoom }
      })
    case 'SET_MODAL_PREVIEW_FILE':
      return update(state, {
        modalPreviewFile: { $set: action.payload.modalPreviewFile }
      })
    case 'SET_MY_EVENTS':
      return update(state, {
        myEvents: { $set: action.payload.myEvents }
      })
    case 'GET_WAITING_ROOM':
      return update(state, {
        listWaitingRoom: { $set: action.payload.listWaitingRoom }
      })
    case 'DELETE_MEETING':
      return update(state, {
        meetingSchedule: { $set: action.payload.meetingSchedule }
      })
    case 'SET_REFETCH':
      return update(state, {
        reFetch: { $set: action.payload.reFetch }
      })
    case 'SET_CREATE_MEETING_SCHEDULE':
      return update(state, {
        meetingSchedule: { $set: action.payload.meetingSchedule }
      })
    case 'GET_ALL_MEETINGS':
      return update(state, {
        allMeeting: { $set: action.payload.allMeeting }
      })
    case 'SET_UPDATE_SOCKET_ID_ON_MEETING_ROOM_USER':
      return update(state, {
        socketIdOnMeetingRoomUser: {
          $set: action.payload.socketIdOnMeetingRoomUser
        }
      })
    case 'SET_UPDATE_PEER_ID_MEETING_ROOM_USER':
      return update(state, {
        peerIdMeetingRoomUser: { $set: action.payload.peerIdMeetingRoomUser }
      })
    case 'SET_COHOST_SOCKET_ID':
      return update(state, {
        coHostSocketId: { $set: action.payload.coHostSocketId }
      })
    default:
      return state
  }
}
