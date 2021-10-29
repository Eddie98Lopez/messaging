import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = (props) => {
    const {url} = props
    
    return <nav>

        <div>
            <Link to = {`${url}/compose`}>Compose</Link>
            <Link to = {`${url}/inbox`}>Inbox</Link>
            <Link to = {`${url}/sent`}>Sent</Link>
        </div>

        <div>
            logout
        </div>

    </nav>
}

export default Navigation