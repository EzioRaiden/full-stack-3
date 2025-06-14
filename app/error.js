'use client'

import Link from "next/link"
import { useEffect } from "react"
export default function Error(props){
    const {error,reset} = props
    useEffect(()=>{
        console.log(error)
    },[error])
    return(
        <div className="page-container">
            <h3>Something went wrong :( </h3>
            <div>
                <button onClick={reset}>Reset</button>
                <Link href={'/'}>
                    <button>Home</button>
                </Link>
            </div>
        </div>
    )
}