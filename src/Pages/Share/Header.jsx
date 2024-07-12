import moment from 'moment';

const Header = () => {
    return (
        <div>
            <h1>The Dragon news</h1>
            <p>jurnalisum without fear or favour <span>{moment().format('MMMM Do YYYY, h:mm:ss a')}</span></p>
             
        </div>
    );
};

export default Header;