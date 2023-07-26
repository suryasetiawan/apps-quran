export const setIsLoading = (payload: {
  isLoading: boolean
}): {
  type: string
  payload: { isLoading: boolean }
} => {
  return {
    type: 'SET_IS_LOADING',
    payload: payload
  }
}

export const setEnableMic = (payload: {
  enableMic: boolean
}): {
  type: string
  payload: { enableMic: boolean }
} => {
  return {
    type: 'SET_ENABLE_MIC',
    payload: payload
  }
}

export const setEnableVideo = (payload: {
  enableVideo: boolean
}): {
  type: string
  payload: { enableVideo: boolean }
} => {
  return {
    type: 'SET_ENABLE_VIDEO',
    payload: payload
  }
}

export const setUserDetails = (payload: {
  userDetails: any
}): {
  type: string
  payload: { userDetails: any }
} => {
  return {
    type: 'SET_USER_DETAILS',
    payload: payload
  }
}

export const setGetTodaysMeeting = (payload: {
  todaysMeeting: any
}): {
  type: string
  payload: { todaysMeeting: any }
} => {
  return {
    type: 'SET_GET_TODAYS_MEETING',
    payload: payload
  }
}

export const setGetAllMeetingSchedule = (payload: {
  meetingSchedule: any
}): {
  type: string
  payload: { meetingSchedule: any }
} => {
  return {
    type: 'SET_GET_ALL_MEETING_SCHEDULE',
    payload: payload
  }
}

export const setGetMeetingById = (payload: {
  meetingDetails: any
}): {
  type: string
  payload: { meetingDetails: any }
} => {
  return {
    type: 'SET_GET_MEETING_BY_ID',
    payload: payload
  }
}

export const setCreatedMeeting = (payload: {
  newMeeting: any
}): {
  type: string
  payload: { newMeeting: any }
} => {
  return {
    type: 'SET_CREATED_MEETING',
    payload: payload
  }
}

export const setCreateMeetingRoom = (payload: {
  meetingRoomUsers: any
}): {
  type: string
  payload: { meetingRoomUsers: any }
} => {
  return {
    type: 'SET_CREATE_MEETING_ROOM',
    payload: payload
  }
}

export const setGetMeetingRoom = (payload: {
  meetingRoom: any
}): {
  type: string
  payload: { meetingRoom: any }
} => {
  return {
    type: 'SET_GET_MEETING_ROOM',
    payload: payload
  }
}

export const setMeetingRoomPermissions = (payload: {
  meetingRoomPermissions: any
}): {
  type: string
  payload: { meetingRoomPermissions: any }
} => {
  return {
    type: 'SET_MEETING_ROOM_PERMISSIONS',
    payload: payload
  }
}

export const setMeetingRoomUsers = (payload: {
  meetingRoomUsers: any
}): {
  type: string
  payload: { meetingRoomUsers: any }
} => {
  return {
    type: 'SET_MEETING_ROOM_USERS',
    payload: payload
  }
}

export const setUpdateSocketOwnerId = (payload: {
  socketOwnerId: any
}): {
  type: string
  payload: { socketOwnerId: any }
} => {
  return {
    type: 'SET_UPDATE_SOCKET_OWNER_ID',
    payload: payload
  }
}

export const setRoomOwnerSocketId = (payload: {
  roomOwnerSocketId: any
}): {
  type: string
  payload: { roomOwnerSocketId: any }
} => {
  return {
    type: 'SET_ROOM_OWNER_SOCKET_ID',
    payload: payload
  }
}

export const setCreateWaitingRoom = (payload: {
  newWaitingRoom: any
}): {
  type: string
  payload: { newWaitingRoom: any }
} => {
  return {
    type: 'SET_CREATE_WAITING_ROOM',
    payload: payload
  }
}

export const setJoiningEmail = (payload: {
  joiningEmail: any
}): {
  type: string
  payload: { joiningEmail: any }
} => {
  return {
    type: 'SET_JOINING_EMAIL',
    payload: payload
  }
}

export const setUserContacts = (payload: {
  userContacts: any
}): {
  type: string
  payload: { userContacts: any }
} => {
  return {
    type: 'SET_USER_CONTACTS',
    payload: payload
  }
}

export const setCreateMeetingAttendee = (payload: {
  meetingAttendee: any
}): {
  type: string
  payload: { meetingAttendee: any }
} => {
  return {
    type: 'SET_CREATE_MEETING_ATTENDEES',
    payload: payload
  }
}

export const setCreateMeetingRoomUser = (payload: {
  meetingRoomUsers: any
}): {
  type: string
  payload: { meetingRoomUsers: any }
} => {
  return {
    type: 'SET_CREATE_MEETING_ROOM_USER',
    payload: payload
  }
}

export const setUpdateMeetingUserName = (payload: {
  meetingRoomUsers: any
}): {
  type: string
  payload: { meetingRoomUsers: any }
} => {
  return {
    type: 'SET_UPDATE_MEETING_ROOM_USER_NAME',
    payload: payload
  }
}

export const setUpdateMeetingRoomUserStatus = (payload: {
  meetingRoomUsers: any
}): {
  type: string
  payload: { meetingRoomUsers: any }
} => {
  return {
    type: 'SET_UPDATE_MEETING_ROOM_USER_STATUS',
    payload: payload
  }
}

export const setChatToken = (payload: {
  chatToken: any
}): {
  type: string
  payload: { chatToken: any }
} => {
  return {
    type: 'SET_CHAT_TOKEN',
    payload: payload
  }
}

export const setRoomMessages = (payload: {
  roomMessages: any
}): {
  type: string
  payload: { roomMessages: any }
} => {
  return {
    type: 'SET_ROOM_MESSAGES',
    payload: payload
  }
}

export const pushNewMessage = (payload: {
  roomMessages: any
}): {
  type: string
  payload: { roomMessages: any }
} => {
  return {
    type: 'PUSH_NEW_MESSAGE',
    payload: payload
  }
}

export const pushEditMessage = (payload: {
  roomMessages: any
}): {
  type: string
  payload: { roomMessages: any }
} => {
  return {
    type: 'PUSH_EDIT_MESSAGE',
    payload: payload
  }
}

export const cleanRoomMessages = (payload: {
  roomMessages: any
}): {
  type: string
  payload: { roomMessages: any }
} => {
  return {
    type: 'CLEAN_ROOM_MESSAGES',
    payload: payload
  }
}

export const setRoomSetupStream = (payload: {
  roomSetupStream: any
}): {
  type: string
  payload: { roomSetupStream: any }
} => {
  return {
    type: 'SET_ROOM_SETUP_STREAM',
    payload: payload
  }
}

export const setVideoEffect = (payload: {
  videoEffect: any
}): {
  type: string
  payload: { videoEffect: any }
} => {
  return {
    type: 'SET_VIDEO_EFFECT',
    payload: payload
  }
}

export const setSelectedMic = (payload: {
  selectedMicFromSetup: any
}): {
  type: string
  payload: { selectedMicFromSetup: any }
} => {
  return {
    type: 'SET_SELECTED_MIC',
    payload: payload
  }
}

export const setSelectedAudio = (payload: {
  selectedAudioFromSetup: any
}): {
  type: string
  payload: { selectedAudioFromSetup: any }
} => {
  return {
    type: 'SET_SELECTED_MIC',
    payload: payload
  }
}

export const setSelectedVideo = (payload: {
  selectedVideoFromSetup: any
}): {
  type: string
  payload: { selectedVideoFromSetup: any }
} => {
  return {
    type: 'SET_SELECTED_MIC',
    payload: payload
  }
}

export const setUpdateWaitingRoom = (payload: {
  newWaitingRoom: any
}): {
  type: string
  payload: { newWaitingRoom: any }
} => {
  return {
    type: 'SET_UPDATE_WAITING_ROOM',
    payload: payload
  }
}

export const setModalPreviewFile = (payload: {
  modalPreviewFile: any
}): {
  type: string
  payload: { modalPreviewFile: any }
} => {
  return {
    type: 'SET_MODAL_PREVIEW_FILE',
    payload: payload
  }
}

export const setMyEvents = (payload: {
  myEvents: any
}): {
  type: string
  payload: { myEvents: any }
} => {
  return {
    type: 'SET_MY_EVENTS',
    payload: payload
  }
}

export const setGetWaitingRoom = (payload: {
  listWaitingRoom: any
}): {
  type: string
  payload: { listWaitingRoom: any }
} => {
  return {
    type: 'GET_WAITING_ROOM',
    payload: payload
  }
}

export const setDeleteMeeting = (payload: {
  meetingSchedule: any
}): {
  type: string
  payload: { meetingSchedule: any }
} => {
  return {
    type: 'DELETE_MEETING',
    payload: payload
  }
}

export const setRefetch = (payload: {
  reFetch: any
}): {
  type: string
  payload: { reFetch: any }
} => {
  return {
    type: 'SET_REFETCH',
    payload: payload
  }
}

export const setCreateMeetingSchedule = (payload: {
  meetingSchedule: any
}): {
  type: string
  payload: { meetingSchedule: any }
} => {
  return {
    type: 'SET_CREATE_MEETING_SCHEDULE',
    payload: payload
  }
}

export const setGetAllMeetings = (payload: {
  allMeeting: any
}): {
  type: string
  payload: { allMeeting: any }
} => {
  return {
    type: 'GET_ALL_MEETINGS',
    payload: payload
  }
}

export const setUpdateMeetingRoomUserSocketId = (payload: {
  socketIdOnMeetingRoomUser: any
}): {
  type: string
  payload: { socketIdOnMeetingRoomUser: any }
} => {
  return {
    type: 'SET_UPDATE_SOCKET_ID_ON_MEETING_ROOM_USER',
    payload: payload
  }
}

export const setUpdatePeerIdMeetingRoomUser = (payload: {
  peerIdMeetingRoomUser: any
}): {
  type: string
  payload: { peerIdMeetingRoomUser: any }
} => {
  return {
    type: 'SET_UPDATE_SOCKET_ID_ON_MEETING_ROOM_USER',
    payload: payload
  }
}

export const setCohostSocketId = (payload: {
  coHostSocketId: any
}): {
  type: string
  payload: { coHostSocketId: any }
} => {
  return {
    type: 'SET_COHOST_SOCKET_ID',
    payload: payload
  }
}
