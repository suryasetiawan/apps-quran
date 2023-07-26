type payload = {
  token: string
}

type isLoading = {
  isLoading: boolean
}

type enableMic = {
  enableMic: boolean
}

type enableMic = {
  enableVideo: boolean
}

type userDetails = {
  userDetails: any
}

type todaysMeeting = {
  todaysMeeting: any
}

type meetingSchedule = {
  meetingSchedule: any
}

type meetingDetails = {
  meetingDetails: any
}

type newMeeting = {
  newMeeting: any
}

type meetingRoomUsers = {
  meetingRoomUsers: any
}

type meetingRoom = {
  meetingRoom: any
}

type meetingRoomPermissions = {
  meetingRoomPermissions: any
}

type socketOwnerId = {
  socketOwnerId: any
}

type roomOwnerSocketId = {
  roomOwnerSocketId: any
}

type newWaitingRoom = {
  newWaitingRoom: any
}

type joiningEmail = {
  joiningEmail: any
}

type userContacts = {
  userContacts: any
}

type meetingAttendee = {
  meetingAttendee: any
}

type chatToken = {
  chatToken: any
}

type roomMessages = {
  roomMessages: any
}

type roomSetupStream = {
  roomSetupStream: any
}

type videoEffect = {
  videoEffect: any
}

type selectedMicFromSetup = {
  selectedMicFromSetup: any
}

type selectedAudioFromSetup = {
  selectedAudioFromSetup: any
}

type selectedVideoFromSetup = {
  selectedVideoFromSetup: any
}

type modalPreviewFile = {
  modalPreviewFile: any
}

type myEvents = {
  myEvents: any
}

type listWaitingRoom = {
  listWaitingRoom: any
}

type reFetch = {
  reFetch: any
}

type allMeeting = {
  allMeeting: any
}

type socketIdOnMeetingRoomUser = {
  socketIdOnMeetingRoomUser: any
}

type peerIdMeetingRoomUser = {
  peerIdMeetingRoomUser: any
}

type coHostSocketId = {
  coHostSocketId: any
}

declare module '@app/store/actions/authAction' {
  export function updateToken(p: payload): {
    type: string
    payload: payload
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setIsLoading(p: isLoading): {
    type: string
    payload: isLoading
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setEnableMic(p: enableMic): {
    type: string
    payload: enableMic
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setEnableVideo(p: enableVideo): {
    type: string
    payload: enableVideo
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setUserDetails(p: userDetails): {
    type: string
    payload: userDetails
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setGetTodaysMeeting(p: todaysMeeting): {
    type: string
    payload: todaysMeeting
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setGetAllMeetingSchedule(p: meetingSchedule): {
    type: string
    payload: meetingSchedule
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setGetMeetingById(p: meetingDetails): {
    type: string
    payload: meetingDetails
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setCreatedMeeting(p: newMeeting): {
    type: string
    payload: newMeeting
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setCreateMeetingRoom(p: meetingRoomUsers): {
    type: string
    payload: meetingRoomUsers
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setGetMeetingRoom(p: meetingRoom): {
    type: string
    payload: meetingRoom
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setMeetingRoomPermissions(p: meetingRoomPermissions): {
    type: string
    payload: meetingRoomPermissions
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setMeetingRoomUsers(p: meetingRoomUsers): {
    type: string
    payload: meetingRoomUsers
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setUpdateSocketOwnerId(p: socketOwnerId): {
    type: string
    payload: socketOwnerId
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setRoomOwnerSocketId(p: roomOwnerSocketId): {
    type: string
    payload: roomOwnerSocketId
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setCreateWaitingRoom(p: newWaitingRoom): {
    type: string
    payload: newWaitingRoom
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setJoiningEmail(p: joiningEmail): {
    type: string
    payload: joiningEmail
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setUserContacts(p: userContacts): {
    type: string
    payload: userContacts
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setCreateMeetingAttendee(p: meetingAttendee): {
    type: string
    payload: meetingAttendee
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setCreateMeetingRoomUser(p: meetingRoomUsers): {
    type: string
    payload: meetingRoomUsers
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setUpdateMeetingUserName(p: meetingRoomUsers): {
    type: string
    payload: meetingRoomUsers
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setUpdateMeetingRoomUserStatus(p: meetingRoomUsers): {
    type: string
    payload: meetingRoomUsers
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setChatToken(p: chatToken): {
    type: string
    payload: chatToken
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setRoomMessages(p: roomMessages): {
    type: string
    payload: roomMessages
  }
}

declare module '@app/store/actions/meetingActions' {
  export function pushNewMessage(p: roomMessages): {
    type: string
    payload: roomMessages
  }
}

declare module '@app/store/actions/meetingActions' {
  export function pushEditMessage(p: roomMessages): {
    type: string
    payload: roomMessages
  }
}

declare module '@app/store/actions/meetingActions' {
  export function cleanRoomMessages(p: roomMessages): {
    type: string
    payload: roomMessages
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setRoomSetupStream(p: roomSetupStream): {
    type: string
    payload: roomSetupStream
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setVideoEffect(p: videoEffect): {
    type: string
    payload: videoEffect
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setSelectedMic(p: selectedMicFromSetup): {
    type: string
    payload: selectedMicFromSetup
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setSelectedAudio(p: selectedAudioFromSetup): {
    type: string
    payload: selectedAudioFromSetup
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setSelectedVideo(p: selectedVideoFromSetup): {
    type: string
    payload: selectedVideoFromSetup
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setUpdateWaitingRoom(p: newWaitingRoom): {
    type: string
    payload: newWaitingRoom
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setModalPreviewFile(p: modalPreviewFile): {
    type: string
    payload: modalPreviewFile
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setMyEvents(p: myEvents): {
    type: string
    payload: myEvents
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setGetWaitingRoom(p: listWaitingRoom): {
    type: string
    payload: listWaitingRoom
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setDeleteMeeting(p: meetingSchedule): {
    type: string
    payload: meetingSchedule
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setRefetch(p: reFetch): {
    type: string
    payload: reFetch
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setCreateMeetingSchedule(p: meetingSchedule): {
    type: string
    payload: meetingSchedule
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setGetAllMeetings(p: allMeeting): {
    type: string
    payload: allMeeting
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setUpdateMeetingRoomUserSocketId(
    p: socketIdOnMeetingRoomUser
  ): {
    type: string
    payload: socketIdOnMeetingRoomUser
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setUpdatePeerIdMeetingRoomUser(p: peerIdMeetingRoomUser): {
    type: string
    payload: peerIdMeetingRoomUser
  }
}

declare module '@app/store/actions/meetingActions' {
  export function setCohostSocketId(p: coHostSocketId): {
    type: string
    payload: coHostSocketId
  }
}
