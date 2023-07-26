import { combineReducers } from 'redux'

import authData from '@store/authData'
import meetingData from '@store/meetingData'

const reducer: any = combineReducers({ authData, meetingData })

export default reducer
