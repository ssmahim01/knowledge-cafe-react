import Profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center w-4/5 mx-auto border-b-2 py-3'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={Profile}/>
        </header>
    );
};

export default Header;