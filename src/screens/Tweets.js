import { useState, useEffect } from "react";

const TravelTweets = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      const response = await fetch(
        "https://api.twitter.com/2/tweets/search/recent?query=travel",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TWITTER_API_TOKEN}`,
          },
        }
      );
      const data = await response.json();
      setTweets(data.data);
    };
    fetchTweets();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8">Travel Tweets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tweets.map((tweet) => (
            <div
              key={tweet.id}
              className="bg-white shadow-md rounded p-4 flex flex-col justify-between"
            >
              <div>
                <p className="text-gray-700 text-sm">{tweet.text}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src={tweet.author_profile_image_url}
                  alt={tweet.author_name}
                />
                <p className="text-gray-600 text-xs">{tweet.author_name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelTweets;
