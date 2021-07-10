import { useState } from "react";
import "./styles.css";
//database
var database = {
  Poadcast: [
    {
      name: "Joe Rogan Experience #1309 - Naval Ravikant",
      rating: "⭐⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/3qHkcs3kG44"
    },
    {
      name:
        "Naval Ravikant Interview (Full Episode) | The Tim Ferriss Show (Podcast)",
      rating: "⭐⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/-7J-Gwc9pVg"
    },
    {
      name: "Joe Rogan Experience #1169 - Elon Musk",
      rating: "⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/ycPr5-27vSI"
    },
    {
      name: "Joe Rogan Experience #1208 - Jordan Peterson",
      rating: "⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/vIeFt88Hm8s"
    },
    {
      name:
        "Truth behind NFTs, CRYPTO and MINTING money in 2021 @ABNUX | PGRadio Ep. 99",
      rating: "⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/hRcOY0NYSr0"
    },
    {
      name: "Media, Politics and The People | PGRadio Ep #93 | @An Open Letter",
      rating: "⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/mXJQV0rKPvA"
    },
    {
      name:
        "EdTech, The Art of Teaching and the Future of Education with @Neeraj Arora| PGRadio Ep #89",
      rating: "⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/0-1LOdnima8"
    },
    {
      name:
        "TRIFECTA OF REALITY FT. @Siddharth Warrier & @The Lightning Emperor | EP #5",
      rating: "⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/PGr4lK3gOEo"
    },
    {
      name:
        "Asking 'How exactly did Language Evolve?' w/ Herbert Terrace | PGRadio ep. 63",
      rating: "⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/9S3vrc7xnvw"
    }
  ],

  Educational: [
    {
      name: "neog.camp playlist",
      rating: "⭐⭐⭐⭐⭐",
      link:
        "https://www.youtube.com/embed/videoseries?list=PLzvhQUIpvvuj5KPnyPyWsvgyzNkX_ACPA"
    },
    {
      name: "What’s Hiding at the Most Solitary Place on Earth? The Deep Sea",
      rating: "⭐⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/PaErPyEnDvk"
    },
    {
      name: "We decoded NASA’s messages to aliens by hand",
      rating: "⭐⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/RRuovINxpPc"
    },
    {
      name: "Why graphene hasn’t taken over the world...yet",
      rating: "⭐⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/IesIsKMjB4Y"
    },
    {
      name: "The Insane Engineering of the Perseverance Rover",
      rating: "⭐⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/yqqaW8DCc-I"
    },
    {
      name: "What Are You Doing With Your Life? The Tail End",
      rating: "⭐⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/JXeJANDKwDc"
    },
    {
      name: "Optimistic Nihilism",
      rating: "⭐⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/MBRqu0YOH14"
    },
    {
      name: "What if We Nuke a City?",
      rating: "⭐⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/5iPH-br_eJQ"
    },
    {
      name: "Moving hoop won't let you miss",
      rating: "⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/myO8fxhDRW0"
    },
    {
      name: "Geoengineering: A Horrible Idea We Might Have to Do",
      rating: "⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/dSu5sXmsur4"
    },
    {
      name: "Do we Need Nuclear Energy to Stop Climate Change?",
      rating: "⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/EhAemz1v7dQ"
    },
    {
      name: "Why Meat is the Best Worst Thing in the World 🍔",
      rating: "⭐⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/NxvQPzrg2Wg"
    }
  ],
  Music: [
    {
      name:
        "Shine On You Crazy Diamond (Full Length: Parts I - IX) - Pink Floyd",
      rating: "⭐⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/8UXircX3VdM"
    },
    {
      name:
        "Satori & The Band From Space live @ Fort Louvois in France for Cercle",
      rating: "⭐⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/gv2jrEsD2fQ"
    },
    {
      name:
        "King - Tu Aake Dekhle | The Carnival | The Last Ride | Prod. by Shahbeatz | Latest Hit Songs 2020",
      rating: "⭐⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/A66TYFdz8YA"
    },
    {
      name: "no pressure full album by logic",
      rating: "⭐⭐⭐⭐⭐",
      link:
        "https://www.youtube.com/embed/videoseries?list=PLfiMjLyNWxebqVwIgfexd-5ML-JPxFqdw"
    },
    {
      name:
        "King - IICONIC | The Carnival | Prod. by Auhm | Latest Hit Songs 2020",
      rating: "⭐⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/suS4R4tc0pM"
    },
    {
      name: "Eminem kamikaze (full Album 2018 explicit)",
      rating: "⭐⭐⭐⭐⭐",
      link:
        "https://www.youtube.com/embed/videoseries?list=PLLvJ2C2ZIgD-ST3X-69t6L3cVOgW0HdOg"
    },
    {
      name: "Seedhe Maut - 'Naamcheen' | Azadi Records",
      rating: "⭐⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/3buqwoYKkL4"
    },
    {
      name: "Prabh Deep - 'CHITTA' (Official Video)",
      rating: "⭐⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/vxUjwGDxR3w"
    },
    {
      name: "Prabh Deep - Amar (Video)",
      rating: "⭐⭐⭐⭐⭐",
      link: "https://www.youtube.com/embed/OM7ow6VR7JY"
    }
  ]
};
//converting object to array
var allCategory = Object.keys(database);

export default function App() {
  // state
  const [category, setCategory] = useState("Poadcast");
  const [button, setButton] = useState("");
  //function to change the state
  function clickHandler(choice) {
    setCategory(choice);
  }

  return (
    <div className="App">
      <h1
        style={{
          marginTop: "0rem",
          backgroundColor: "#FF0000",
          color: "#FFFFFF",
          padding: "0.5rem"
        }}
      >
        Youtube Recommendation
      </h1>

      <p>
        These are some of my the favourite youtube videos. Select category to
        get started.
      </p>

      <div>
        {allCategory.map(function (choice) {
          return (
            <button
              key={choice}
              style={{
                cursor: "pointer",
                background: "#FF0000",
                color: "#FFFFFF",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px solid black",
                margin: "1rem 0.3rem"
              }}
              onClick={() => clickHandler(choice)}
            >
              {choice}
            </button>
          );
        })}
      </div>

      <hr />

      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0rem" }}>
          {/* caution */}
          {database[category].map(function (recommendation) {
            return (
              <li
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  margin: "auto",
                  borderRadius: "0.5rem"
                }}
                key={recommendation.name}
              >
                <iframe
                  style={{ minWidth: "50vw", minHeight: "25vw" }}
                  src={recommendation.link}
                  title={recommendation.name}
                >
                  {" "}
                </iframe>
                <div style={{ fontSize: "larger" }}>
                  {" "}
                  {recommendation.name}{" "}
                </div>
                <div style={{ fontSize: "smaller" }}>
                  {" "}
                  {recommendation.rating}{" "}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
