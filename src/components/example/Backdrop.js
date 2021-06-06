const Backdrop = ({ onCancel }) => {
  // we're forwarding the function that still has a relationship
  // - we the state in the parent, we can also rename it
  return <div className="backdrop" onClick={onCancel} />
}

export default Backdrop
