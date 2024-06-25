import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="w-full h-[100vh] flex space-x-4 items-center justify-center bg-[#4c94b8]">
            <button className="border border-gray-800 rounded-md p-4 hover:bg-[#e1896e] font-mono">
                <Link to={'/queryfilter'}>Query Filter Builder</Link>
            </button>
            <button className="border border-gray-800 rounded-md p-4 hover:bg-[#e1896e] font-mono">
                <Link to={'/pipelinebuilder'}>Pipeline Builder</Link>
            </button>
        </div>
    )
}

export default Home
