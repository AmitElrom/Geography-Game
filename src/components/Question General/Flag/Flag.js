import Card from '../../UI/Card/Card'

const Flag = ({ flag }) => {
    return (
        <Card
            className='centered-horizontally'>
            <img
                src={flag}
                alt='flag'
                style={{
                    boxSizing: 'content-box',
                    width: '100%',
                    height: '150px'
                }} />
        </Card>
    )
}

export default Flag