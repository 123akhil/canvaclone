import React from 'react'

const BodyFirst = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center ">
            <div className="w-1/2 flex justify-center items-center rounded-md m-6" >
              <iframe className="p-7" width="624" height="426" src="/1.mp4" frameborder="0" allow="autoplay"></iframe>
            </div>
            <div className="w-1/2 flex flex-col justify-center ml-10" >
                <h1 className="font-bold text-4xl">Start inspired</h1>
                <p className="w-3/4 mt-3 text-lg">with thousands of professional, images and quality content to choose from, get a headstart on best ideas and work to life.</p>
                <button className="font-semibold text-white bg-purple-700 px-4 py-2 rounded-md hover:bg-purple-600 w-40 mt-8">Create a design</button>
            </div>
        </div>
    )
}

export default BodyFirst
