// Denhär komponenten används ej.

export const FormInput = ({ className, errorMsg, label, ...rest }) => {
  return (
    <div className={`form-group ${className}`}>
      <label htmlFor="firstName" className="form-label">{ label }</label>
      <input className="form-control" {...rest} />
      { errorMsg && <p className="invalid-input">{ errorMsg }</p>}
    </div>
  )
}