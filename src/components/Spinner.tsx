import { ClipLoader } from "react-spinners";

type TSpinnerProps = {
  loading: boolean;
};

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }: TSpinnerProps) => {
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
