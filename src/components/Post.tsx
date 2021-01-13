import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {PostI, UserI} from "../interfaces";
import {Loader} from "./Loader";

export interface Props {
    post: PostI
}

const Container = styled.div`
  border-bottom: solid 1px #eee;
  padding: 10px;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(230, 230, 230, 0.3);
  }
`
const UserName = styled.span`
  font-size: 14px;
  
  &:hover {
  text-decoration: underline;
  }
`

export default ({post: {title, body, userId}}: Props) => {
    const [user, setUser] = useState<UserI | null>(null);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                const user: UserI = await data.json();
                setUser(user);
            } catch(e){
                console.log(e);
            }
        }
        fetchUser();
    }, [])

    return (<Container>
        {user === null ? (<Loader />) : (<>
            <div>
                <h3>{title}</h3>
                <UserName>{user.name}<i> @{user.username}</i></UserName>
            </div>

            <p>{body}</p>
        </>)}

    </Container>)
}