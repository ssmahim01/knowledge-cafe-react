import Profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center border-b-2 py-3 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={Profile}/>
        </header>
    );
};

export default Header;