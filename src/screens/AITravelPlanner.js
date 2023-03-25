import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styled from "styled-components";
import MapShow from "./MapShow";
import html2pdf from "html2pdf.js";
import Weather from "./Weather";
import Navbar from "../components/Navbar";
import { navlinks } from "../data/staticdata.js";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: stretch;
  max-height: 100vh;
  overflow: scroll;

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
const PaddingDiv = styled.div`
  background-image: linear-gradient(
    to bottom right,
    #e9fdf9,
    #88f7e8,
    #9af6e4,
    #c2fa88,
    #59c26c
  );
  background-size: 400% 400%;
  width: 100%;
  overflow: scroll;
  padding-top: 4rem;
  padding-bottom: 4rem;
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
`;
const MainContent = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-image: linear-gradient(
    to bottom right,
    #e9fdf9,
    #88f7e8,
    #9af6e4,
    #c2fa88,
    #59c26c
  );
  background-size: 400% 400%;
  color: #fff;
  width: 100%;
  overflow: scroll;

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
  color: "#000";
  font-size: 1rem;
  font-weight: normal;
  font-family: "Roboto", sans-serif;
`;

const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 100vh;
  top: 0;
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

const Select = styled.select`
  padding: 0.6rem 0.6rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  font-size: 0.8rem;
  width: calc(100% - 0.6rem);

  color: #000;
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
  color: "#000";
`;

const ResponseText = styled.div`
  width: 80%;
  font-size: 1rem;
  font-weight: normal;
  color: #000;
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

const LanguageSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const LanguageRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const TopLocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 0.4rem;
`;

const LanguageOption = styled.div`
  display: flex;
  font-size: 1.4rem;
  flex-direction: column;
  align-items: center;
  margin-right: 0.2rem;
  padding: 0.4rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  &.selected {
    border: 1px solid #007bff;
    border-radius: 0.4rem;
  }

  &:hover {
    border-color: #333;
    border-radius: 0.4rem;
  }
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

const InterestsContainerNew = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

const InterestItemNew = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding: 4px;
  margin-right: 4px;
  margin-bottom: 4px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;
  border-radius: 0.4rem;

  &:hover {
    border-color: #333;
    border-radius: 0.4rem;
  }

  &.selected {
    border: 1px solid #007bff;
    border-radius: 0.4rem;
  }
`;

const InterestName = styled.span`
  margin-left: 6px;
  margin-right: 6px;
`;

const InterestEmoji = styled.span`
  font-size: 16px;
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

const CuisineTypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

const CuisineType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.4rem;
  margin-bottom: 5px;
  margin-right: 5px;
  border-radius: 0.4rem;
  border: 1px solid transparent;
  &.selected {
    border: 1px solid #007bff;
    border-radius: 0.4rem;
  }
  &:hover {
    border-color: #333;
    border-radius: 0.4rem;
  }
`;

const options = {
  travelStyles: [
    "Cultural",
    "Adventure",
    "Relaxation",
    "Beach",
    "City Break",
    "Road Trip",
    "Wildlife Safari",
    "Ski",
  ],
  interestsNew: [
    { name: "History", emoji: "🏛️" },
    { name: "Art", emoji: "🎨" },
    { name: "Food", emoji: "🍴" },
    { name: "Music", emoji: "🎵" },
    { name: "Nature", emoji: "🌳" },
    { name: "Sports", emoji: "⚽" },
    { name: "Photography", emoji: "📷" },
    { name: "Architecture", emoji: "🏰" },
    { name: "Literature", emoji: "📚" },
  ],

  interests: [
    "History",
    "Art",
    "Food",
    "Music",
    "Nature",
    "Sports",
    "Photography",
    "Architecture",
    "Literature",
  ],

  accommodationTypes: [
    "Hotel",
    "Boutique Hotel",
    "Hostel",
    "Resort",
    "Vacation Rental",
    "Camping",
    "Homestay",
    "Bed and Breakfast",
  ],
  activityTypes: [
    "Outdoor",
    "Sightseeing",
    "Shopping",
    "Nightlife",
    "Museums",
    "Theme Parks",
    "Water Sports",
    "Yoga and Wellness",
  ],
  cuisineTypes: [
    { name: "Traditional", emoji: "😋" },
    { name: "Japanese", emoji: "🍱" },
    { name: "Italian", emoji: "🍝" },
    { name: "American", emoji: "🍔" },
    { name: "Korean", emoji: "🍜" },
    { name: "Mexican", emoji: "🌮" },
    { name: "Thai", emoji: "🍲" },
    { name: "Turkish", emoji: "🥙" },
    { name: "Indian", emoji: "🍛" },
    { name: "French", emoji: "🥐" },
    { name: "Spanish", emoji: "🥘" },
    { name: "Greek", emoji: "🍗" },
    { name: "Chinese", emoji: "🥡" },
  ],

  languages: [
    { value: "en", label: "English", icon: "English" },
    { value: "tr", label: "Türkçe", icon: "Chinese" },
    { value: "fr", label: "Français", icon: "French" },
    { value: "es", label: "Español", icon: "Spanish" },
    { value: "de", label: "Deutsch", icon: "German" },
    { value: "it", label: "Italiano", icon: "Italian" },
    { value: "pt", label: "Português", icon: "Portugese" },
    { value: "ru", label: "Русский", icon: "Russian" },
    { value: "ja", label: "日本語", icon: "Japanese" },
  ],
};

const topLocations = [
  { name: "Pune, India", value: "Pune/India" },
  { name: "Mumbai, India", value: "Mumbai/India" },
  { name: "Dubai, UAE", value: "Dubai/UAE" },
  { name: "Milano, Italy", value: "Milano/Italy" },
  { name: "Paris, France", value: "Paris/France" },
  { name: "Los Angeles, CA", value: "Los Angeles/California" },
  // add more top locations as needed
];

const defaultValues = {
  destinationCountry: topLocations[0]?.name,
  budget: "10000 INR",
  travelStyle: options.travelStyles[0],
  interestsNew: [],
  accommodationType: options.accommodationTypes[0],
  transportationType: "Bus",
  activityType: [options.activityTypes[0]],
  cuisineType: options.cuisineTypes[0],
  tripDuration: "3",
  language: options.languages[0].value,
};

const Main = ({ loading, response, onClick }) => (
  <MainContent>
    <Title>  AI Trip Generater  </Title>
    {!response && (
      <Subtitle style={{ color: "#000", margin: 10 }}>
        Fill the form to generate your itinerary
      </Subtitle>
    )}
    <GenerateButton
      loading={loading}
      type="submit"
      disabled={loading}
      className={loading ? "loading" : ""}
      onClick={onClick}
    ></GenerateButton>
    <ResponseContainer>
      {loading ? <Loading /> : response && <ResponseData response={response} />}
    </ResponseContainer>
  </MainContent>
);

const ResponseData = ({ response }) => {
    console.log(response);
  const ref = useRef();

  return (
    <ResponseContainer>
      <ResponseTitle>
        <span role="img" aria-label="emoji"></span> Your travel plan is ready 🎉
      </ResponseTitle>
      <ResponseText ref={ref}>
        <ReactMarkdown children={response} className="markdown"></ReactMarkdown>
      </ResponseText>
      <ButtonContainer>
        <ActionButton
          className="button-emrald"
          onClick={async () => {
            // const blob = new Blob([response], {
            //   type: "text/plain;charset=utf-8",
            // });
            // const url = URL.createObjectURL(blob);
            // const link = document.createElement("a");
            // link.setAttribute("href", url);
            // link.setAttribute("download", "travel-plan.txt");
            // document.body.appendChild(link);
            // link.click();
            // document.body.removeChild(link);
            // URL.revokeObjectURL(url);
            const element = ref.current;
            const opt = {
              margin: 0.5,
              filename: "itinerary.pdf",
              image: { type: "jpeg", quality: 0.98 },
              html2canvas: { scale: 2 },
              jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
            };
            html2pdf().set(opt).from(element).save();
          }}
        >
          Download
        </ActionButton>
      </ButtonContainer>
    </ResponseContainer>
  );
};

const GenerateButton = ({ loading, onClick }) => (
  <Button
    className="button-emrald"
    onClick={onClick}
    disabled={loading}
    style={{ width: "20%", minWidth: "fit-content", marginTop: "20px" }}
  >
    {loading ? "Please wait..." : "Generate"}
  </Button>
);

const AITravelPlanner = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [values, setValues] = useState(defaultValues);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedCuisineTypes, setSelectedCuisineTypes] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(
    options.languages[0]
  );
  const [dst, setDst] = useState(topLocations[0]?.name);

  const handleCuisineTypeClick = (cuisineType) => {
    if (selectedCuisineTypes.includes(cuisineType)) {
      setSelectedCuisineTypes(
        selectedCuisineTypes.filter((item) => item !== cuisineType)
      );
      setValues((prevState) => ({
        ...prevState,
        cuisineType: selectedCuisineTypes.filter(
          (item) => item !== cuisineType
        ),
      }));
    } else {
      if (selectedCuisineTypes.length >= 3) {
        setSelectedCuisineTypes((prevSelectedCuisineTypes) => {
          const newSelectedCuisineTypes = [
            ...prevSelectedCuisineTypes.slice(1),
            cuisineType,
          ];
          setValues((prevState) => ({
            ...prevState,
            cuisineType: newSelectedCuisineTypes,
          }));
          return newSelectedCuisineTypes;
        });
      } else {
        setSelectedCuisineTypes((prevSelectedCuisineTypes) => {
          const newSelectedCuisineTypes = [
            ...prevSelectedCuisineTypes,
            cuisineType,
          ];
          setValues((prevState) => ({
            ...prevState,
            cuisineType: newSelectedCuisineTypes,
          }));
          return newSelectedCuisineTypes;
        });
      }
    }
  };

  const handleInterestClick = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    } else {
      if (selectedInterests.length >= 3) {
        setSelectedInterests((prevSelectedInterests) => {
          const newSelectedInterests = [
            ...prevSelectedInterests.slice(1),
            interest,
          ];
          setValues((prevState) => ({
            ...prevState,
            interestsNew: newSelectedInterests,
          }));
          return newSelectedInterests;
        });
      } else {
        setSelectedInterests((prevSelectedInterests) => {
          const newSelectedInterests = [...prevSelectedInterests, interest];
          setValues((prevState) => ({
            ...prevState,
            interestsNew: newSelectedInterests,
          }));
          return newSelectedInterests;
        });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "destinationCountry") {
      setDst(value);
    }
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLocationClick = (location) => {
    setDst(location.name);
    setValues((prevState) => ({
      ...prevState,
      destinationCountry: location.name,
    }));
  };

  const handleMultiSelectChange = (e) => {
    const { name, options } = e.target;
    const selectedOptions = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedOptions.push(options[i].value);
      }
    }
    setValues((prevState) => ({
      ...prevState,
      [name]: selectedOptions,
    }));
  };

  const handleLanguageClick = (option) => {
    setSelectedLanguage(option.value);

    setValues((prevState) => ({
      ...prevState,
      language: option.label,
    }));
  };

  function scrollDown() {
    // console.log(document.body.scrollHeight);
    window.scrollTo(0, 980);
  }

  function parseContent(content) {
    let split = content.split("\n");
    let rem = false;
    [
      "Unfortunately",
      "sorry",
      "Sorry",
      "unfortunately",
      "I cannot",
      "i cannot",
    ].forEach((word) => {
      if (split[0].includes(word)) {
        rem = true;
        split[0] = "";
        return;
      }
    });
    let newContent = "";
    split.forEach((sent) => {
      if (sent !== "") {
        newContent += sent + "\n";
      }
    });
    return newContent;
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    setLoading(true);
    let prompt = `Generate a personalized travel itinerary for a trip to ${values.destinationCountry} with a budget of ${values.budget}. The traveler is interested in a ${values.travelStyle} vacation and enjoys ${values.interestsNew}. They are looking for ${values.accommodationType} accommodations and prefer ${values.transportationType} transportation. The itinerary should include ${values.activityType} activities and ${values.cuisineType} dining options. Please provide a detailed itinerary with daily recommendations for ${values.tripDuration} days, including suggested destinations, activities, and dining options. The itinerary should be written in ${values.language}.`;

    fetch(`${process.env.REACT_APP_OPENAI_ENDPOINT_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt }),
    })
      .then((response) => response.json())
      .then((data) => {
        const parsed = parseContent(data.choices[0].message.content);
        setResponse(parsed);
        console.log(data.choices[0].message.content);
        setLoading(false);
        return data.choices[0].message.content;
      })
      .catch((error) => {
        console.error("error", error);
        setLoading(false);
      });
  };

  return (
    <>
      <Navbar navlinks={navlinks} ctaVisible={false} />
      {/* <PaddingDiv /> */}
      <Container>
        <Main loading={loading} response={response} onClick={handleSubmit} />
        <Panel className="pt-16">
          <FormContainer className="pt-16">
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
            <Label htmlFor="interests">Interests</Label>
            <InterestsContainerNew>
              {options.interestsNew.map((interest, index) => (
                <InterestItemNew
                  key={index}
                  className={
                    selectedInterests.includes(interest.name) ? "selected" : ""
                  }
                  onClick={() => {
                    handleInterestClick(interest.name);
                  }}
                  value={interest}
                >
                  <InterestEmoji aria-label="emoji">
                    {interest.emoji}
                  </InterestEmoji>
                  <InterestName>{interest.name}</InterestName>
                </InterestItemNew>
              ))}
            </InterestsContainerNew>

            <FormRow>
              <FormGroup>
                <Label htmlFor="accommodationType">Accommodation</Label>
                <Select
                  id="accommodationType"
                  name="accommodationType"
                  value={values.accommodationType}
                  onChange={handleChange}
                >
                  {options.accommodationTypes.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="travelStyle">Travel Style</Label>
                <Select
                  id="travelStyle"
                  name="travelStyle"
                  value={values.travelStyle}
                  onChange={handleChange}
                >
                  {options.travelStyles.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </FormGroup>
            </FormRow>

            <Label htmlFor="transportationType">
              Transportation Type
              <p
                style={{
                  display: "inline-block",
                  fontSize: "10px",

                  color: "#666",
                }}
              >
                (e.g. car, train, bus, etc.)
              </p>
            </Label>
            <Input
              type="text"
              id="transportationType"
              name="transportationType"
              value={values.transportationType}
              onChange={handleChange}
              required
            />

            <Label htmlFor="activityType">
              Activity Type
              <p
                style={{
                  display: "inline-block",
                  fontSize: "10px",

                  color: "#666",
                }}
              >
                (select multiple options)
              </p>
            </Label>
            <Select
              id="activityType"
              name="activityType"
              multiple
              value={values.activityType}
              onChange={handleMultiSelectChange}
              style={{ minHeight: 100 }}
            >
              {options.activityTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            <Label htmlFor="cuisineType">Cuisine Type</Label>
            <CuisineTypesContainer>
              {options.cuisineTypes.map((cuisineType) => (
                <CuisineType
                  multiple
                  value={values.cuisineType}
                  onChange={handleMultiSelectChange}
                  key={cuisineType.name}
                  className={
                    selectedCuisineTypes.includes(cuisineType.name)
                      ? "selected"
                      : ""
                  }
                  onClick={() => {
                    handleCuisineTypeClick(cuisineType.name);
                  }}
                >
                  <span role="img" aria-label={cuisineType.name}>
                    {cuisineType.emoji}
                  </span>

                  <br />

                  <span>{cuisineType.name}</span>
                </CuisineType>
              ))}
            </CuisineTypesContainer>

            <LanguageSelectorContainer>
              <Label>Language</Label>
              <LanguageRow>
                {options.languages.map((option) => (
                  <LanguageOption
                    key={option.value}
                    onClick={() => {
                      handleLanguageClick(option);
                    }}
                    value={values.language}
                    className={
                      selectedLanguage === option.value ? "selected" : ""
                    }
                  >
                    <span style={{ fontSize: 14 }} aria-label={option.label}>
                      {option.icon}
                    </span>
                  </LanguageOption>
                ))}
              </LanguageRow>
            </LanguageSelectorContainer>
            {
              <Box
                component="img"
                sx={{
                  width: "50px",
                }}
                alt="Scroll down to maps"
                src="maps"
                onClick={scrollDown}
              />
            }
          </FormContainer>
        </Panel>
      </Container>
      {<MapShow title={`Browse ${dst} Map`} dst={dst} />}
      {<Weather dst={dst} />}
      {/* <div className="relative  md:mt-6 bg-gradient-to-b from-emerald-200 to-white">
        <div className="travigo-container" style={{ paddingBottom: "50px" }}>
          <div className="flex items-center justify-center text-center mb-11 md:mb-7">
            <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg text-slate-900">
              Weather
            </h1>
          </div>
          <div className="d-flex items-center justify-center">
            <div style={{ display: "flex" }}>
              {weather.length === 0 ? (
                <p className="text-lg xl:text-base sm:text-sm xsm:text-xs font-medium">
                  Sorry weather not available for this city
                </p>
              ) : (
                weather.map((item) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      width: "400px",
                      padding: "7px",
                      margin: "5px",
                      border: "1px black solid",
                      borderRadius: "8px",
                    }}
                  >
                    <h4>{item.date}</h4>
                    <p className="text-lg xl:text-base sm:text-sm xsm:text-xs font-medium">
                      {item.maxTemp + "/" + item.minTemp + "C"}
                    </p>
                    <img
                      src={
                        "https://developer.foreca.com/static/images/symbols/" +
                        item.symbol +
                        ".png"
                      }
                      alt="forecast"
                    ></img>
                    <p className="text-2xl xl:text-2xl sm:text-xl font-bold drop-shadow-lg">
                      {item.symbolPhrase}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AITravelPlanner;
