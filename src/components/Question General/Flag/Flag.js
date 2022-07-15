import Card from '../../UI/Card/Card'

const Flag = ({ flag }) => {
    return (
        <Card
            className='centered-horizontally'
            style={{
                width: '30%'
            }} >
            <img
                src={flag}
                alt='flag'
                style={{
                    boxSizing: 'content-box',
                    width: '100%'
                }} />
        </Card>
    )
}

export default Flag