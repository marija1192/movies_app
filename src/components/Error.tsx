import { IError } from "../interfaces/IError";

export default function Error({ title, message }: IError) {
    return (
      <div className="error">
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    );
  }