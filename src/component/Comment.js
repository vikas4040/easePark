import moment from 'moment'     

const styles = {
  title: {
    fontSize: '1.3em',
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'darkgray',
  },
  detailsContainer: {
    marginTop: '10px',
    marginBottom: '10px',
  },
}
const Comment = (props) => {
  const { comm } = props
  return (
    <div>   
      <div className="row">
        <div className="col">
          <div style={styles.subtitle}>
            Created By {comm.firstName} on{' '}
            {moment(comm.commentTime).format('MMM DD, YYYY')} (
            {moment(comm.commentTime).fromNow()})
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div style={styles.detailsContainer}>{comm.description}</div>
        </div>
      </div>

      <hr />
    </div>

    )
}
export default Comment