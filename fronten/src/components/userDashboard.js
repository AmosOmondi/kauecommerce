import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import Taskform from './taskform'

const Dashboard = () => {

const navigate = useNavigate()

const { user } = useSelector(state => state.auth) 

useEffect(() => {

if (!user) navigate('/login')
}, [user, navigate])

return (
<>
    
</>

)

}

export default Dashboard