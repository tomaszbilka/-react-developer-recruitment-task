import Canvas from "../components/Canvas/Canvas";
import Form from "../components/Form/Form";
import InfoHeader from "../components/InfoHeader/InfoHeader";
import Board from "../components/UI/Board";
import HorizontalRule from "../components/UI/HR";
import useHttp from "../hooks/use-http";
import ErrorMsg from "../components/Error/Error";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const MainPage = () => {
  const [sendRequest, data, isLoading, error] = useHttp();

  const sendRequestHandler = async (id) => {
    let requestedId = id;
    //check if no id and get random id from API
    if (id === "") {
      const url = "https://recruitment01.vercel.app/api/init";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Something went wrong with fetching data");
        }
        const data = await response.json();
        requestedId = data.id;
      } catch (error) {
        alert(error.message);
      }
    }
    //fetch data from API by custom hook
    const url = `https://recruitment01.vercel.app/api/project/`;
    sendRequest(url, requestedId, "GET");
  };

  return (
    <>
      <Form fetchHandler={sendRequestHandler} />
      <HorizontalRule width='95%' />
      {!data && !isLoading && !error && <p>Empty</p>}
      {isLoading && !error && <LoadingSpinner size='30px' />}
      {data && !isLoading && !error && (
        <InfoHeader name={data?.project.name} id={data?.project.id} />
      )}
      {data && !isLoading && !error && (
        <Board>
          <Canvas
            width={data?.project.width}
            height={data?.project.height}
            items={data?.project.items}
          />
        </Board>
      )}
      {!isLoading && error && <ErrorMsg message={error} />}
    </>
  );
};

export default MainPage;
