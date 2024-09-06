import { useParams } from 'react-router-dom';

function Test() {
  const { id } = useParams();
  return (
    <>
      <h1>testing {id}</h1>
    </>
  );
}
export default Test;
