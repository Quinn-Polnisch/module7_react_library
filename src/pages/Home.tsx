import Background from '../assets/images/bookshelf.jpg'

const Home = () => {
  return (
    <div
        style={ {backgroundImage: `url(${ Background })`}}
        className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
        >
          <div className="flex place-items-center h-screen">
            <h1 className="p-5 bg-white bg-opacity-75 text-black rounded text-xl">Welcome to the Library</h1>
          </div>
    </div>
  )
}

export default Home