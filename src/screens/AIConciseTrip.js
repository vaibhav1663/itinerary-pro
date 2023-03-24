import React, { useState } from "react";
import styled from "styled-components";
import MapShow from "./MapShow";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: stretch;
  min-height: 100vh;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }

  &::-webkit-scrollbar {
    display: none;
    width: 0px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
`;

const MainContent = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 100vh;
  background-image: linear-gradient(
    to bottom right,
    #1a1a1a,
    #222222,
    #333333,
    #444444,
    #555555
  );
  background-size: 400% 400%;
  color: #fff;
  width: 100%;
  height: 100%;

  animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    20% {
      background-position: 50% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media screen and (max-width: 1320px) {
    flex-basis: 60%;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 50px;
    overflow-x: hidden;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-top: 4rem;
  color: #fff;
  font-weight: bold;
  text-shadow: 0 0 10px #000;
  /* text-shadow: #f4ffcf 1px 0 10px; */
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  font-family: "Roboto", sans-serif;
`;

const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  max-height: 100vh;
`;

const Loading = styled.p`
  color: gradient;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;

  &::after {
    content: "⏳";
    animation: loading 2s infinite;
  }

  @keyframes loading {
    0% {
      content: "⌛️";
    }
    50% {
      content: "⏳";
    }
    100% {
      content: "⌛️";
    }
  }
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: bold;
  font-weight: 600;
  color: "#000fs0";
  padding: 0.4rem;
`;

const Input = styled.input`
  border-radius: 0.4rem;
  border: 1px solid #ccc;
  font-size: 0.8rem;
  color: #000;
  width: calc(100% - 2rem);
  padding: 0.6rem 0.6rem;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  width: 100%;
  border: none;
  font-size: 1rem;

  background-color: #0080ff;
  color: #fff;
  cursor: pointer;
  border-radius: 0.4rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #00bf2f;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &.loading {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ResponseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResponseTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
`;

const ResponseText = styled.div`
  width: 80%;
  font-size: 1rem;
  font-weight: normal;
  color: #fff;
  border-radius: 0.4rem;
  padding: 1rem;
  margin: 2rem;
  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    font-size: 0.9rem;
  }
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
  }

  a {
    color: #fff;
    text-decoration: underline;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

const TopLocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 0.4rem;
`;

const PinButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 4px;
  font-size: 12px;
  letter-spacing: 0px;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border: 1px solid transparent;

  &::before {
    content: "📍";
    margin-right: 4px;
    left: 8px;
    top: 8px;
  }

  &:hover {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
  margin-bottom: 16px;
`;

// Button component
const ActionButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  margin: 0 4px;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border: 1px solid transparent;

  &::before {
    content: "⬇️";
    margin-right: 4px;
    left: 8px;
    top: 8px;
  }

  &:hover {
    background-color: #dadada;
    border: 1px solid #ccc;
  }
`;

const Panel = styled.div`
  display: flex;
  flex-basis: 30%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid #ccc;
  background-color: #fff;
  width: 28%;
  top: 0;
  right: 0;
  overflow-y: auto;

  @media screen and (max-width: 1320px) {
    flex-basis: calc(40% - 2.2rem);
    width: calc(40% - 2.2rem);
    position: relative;
  }

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    margin: 0 auto;
  }

  @media (max-height: 500px) {
    width: calc(100% - 2rem);
    margin: 0 auto;
    overflow-y: scroll;
    position: relative;
  }
`;

const topLocations = [
  { name: "Paris, France", value: "Paris/France" },
  { name: "Pune, India", value: "Pune/India" },
  { name: "Mumbai, India", value: "Mumbai/India" },
  { name: "Dubai, UAE", value: "Dubai/UAE" },
  { name: "Milano, Italy", value: "Milano/Italy" },
  { name: "Los Angeles, CA", value: "Los Angeles/California" },
  // add more top locations as needed
];

const defaultValues = {
  destinationCountry: topLocations[0]?.name,
  budget: "10000 INR",
  tripDuration: "3",
};

const Main = ({ loading, response, onClick }) => (
  <MainContent>
    <Title>⭐️ AI Trip Generator ⭐️</Title>
    {!response && <Subtitle>Fill the form to generate your itinerary</Subtitle>}
    <GenerateButton
      loading={loading}
      type="submit"
      disabled={loading}
      className={loading ? "loading" : ""}
      onClick={onClick}
    ></GenerateButton>
    <ResponseContainer>
      {loading ? <Loading /> : <></>}
    </ResponseContainer>
    {!loading && response && <>
      <object width="100%" height="700" data={response} type="application/pdf">   </object>
        <span role="img" aria-label="emoji"></span> Your travel plan is ready 🎉
    </>}
  </MainContent>
);

const ResponseData = ({ response }) => {
  //   console.log(response);
  return (
    <>
      
      {/* <object data={response} type="application/pdf" width="100%" height="100%">
        <p>
          Alternative text - include a link <a href={response}>to the PDF!</a>
        </p>
      </object> */}
    </>
  );
};

const GenerateButton = ({ loading, onClick }) => (
  <Button onClick={onClick} disabled={loading} style={{ width: "20%" }}>
    {loading ? "Please wait..." : "Generate"}
  </Button>
);

const AIConciseTrip = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [values, setValues] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLocationClick = (location) => {
    setValues((prevState) => ({
      ...prevState,
      destinationCountry: location.name,
    }));
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    setLoading(true);
    // let prompt = `Generate a personalized travel itinerary for a trip to ${values.destinationCountry} with a budget of ${values.budget}. The traveler is interested in a ${values.travelStyle} vacation and enjoys ${values.interestsNew}. They are looking for ${values.accommodationType} accommodations and prefer ${values.transportationType} transportation. The itinerary should include ${values.activityType} activities and ${values.cuisineType} dining options. Please provide a detailed itinerary with daily recommendations for ${values.tripDuration} days, including suggested destinations, activities, and dining options. The itinerary should be written in ${values.language}. `;
    const params = {
      grant_type: "refresh_token",
      refresh_token: `${process.env.REACT_APP_CONCISE_PDF_AI_REFRESH_TOKEN}`,
    };
    const tokenResponse = await fetch(
      `${process.env.REACT_APP_CONCISE_PDF_AI_ACCESS_TOKEN_URL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      }
    );
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;
    // const budget
    const budget = parseInt(
      parseFloat(values.budget.split(" ")[0]) / 81
    ).toString();
    console.log(budget, values.budget);
    const response = await fetch(
      `${process.env.REACT_APP_CONCISE_PDF_AI_URL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          "User-Agent": "PostmanRuntime/7.31.3",
        },
        body: JSON.stringify({
          starting_date: "",
          destination: values.destinationCountry,
          type: 1,
          days: values.tripDuration,
          budget: budget,
        }),
      }
    );
    const data = await response.json();
    console.log("click", data);
    if (data.status === "OK") {
      console.log("click", data.file_url);
      setResponse(data.file_url);
    }

    setLoading(false);
  };

  return (
    <>
      <Container>
        <Main loading={loading} response={response} onClick={handleSubmit} />
        <Panel>
          <FormContainer>
            <Label htmlFor="destinationCountry">Destination Country/City</Label>
            <Input
              type="text"
              placeholder="e.g. San Francisco/USA, Paris/France, Istanbul/Turkey, etc."
              id="destinationCountry"
              name="destinationCountry"
              value={values.destinationCountry}
              onChange={handleChange}
              required
            />
            <TopLocationContainer>
              <Label htmlFor="topDestinations">🔥Top Destinations:</Label>
              {topLocations.map((location) => (
                <PinButton
                  key={location.value}
                  onClick={() => handleLocationClick(location)}
                >
                  {location.name}
                </PinButton>
              ))}
            </TopLocationContainer>
            <FormRow>
              <FormGroup>
                <Label htmlFor="budget">
                  Budget
                  <p
                    style={{
                      display: "inline-block",
                      color: "#666",
                      fontSize: "10px",
                    }}
                  >
                    (with currency)
                  </p>
                </Label>
                <Input
                  type="text"
                  placeholder="e.g. $1000 USD, 1000 EUR, etc."
                  id="budget"
                  name="budget"
                  value={values.budget}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="tripDuration">
                  Trip Duration
                  <p
                    style={{
                      display: "inline-block",
                      color: "#666",
                      fontSize: "10px",
                    }}
                  >
                    (in days)
                  </p>
                </Label>
                <Input
                  type="number"
                  id="tripDuration"
                  name="tripDuration"
                  value={values.tripDuration}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>
          </FormContainer>
        </Panel>
      </Container>
      {<MapShow title="Maps" dst={values.destinationCountry}/>}
    </>
  );
};

export default AIConciseTrip;
