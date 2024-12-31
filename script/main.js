window.addEventListener('load', () => {
  Swal.fire({
    title: 'Hi, Neha!',
    text: "Let's make your day special!",
    iconHtml: '🎂',
    customClass: {
      icon: 'no-border', 
    },
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Let’s go!',
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector('.song').play();
      resolveFetch().then(animationTimeline());
    } else {
      resolveFetch().then(animationTimeline());
    }
  });
});



// animation timeline
const animationTimeline = () => {
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  }

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  }

  // timeline
  const tl = new TimelineMax();

  tl.to(".container", 0.6, {
    visibility: "visible"
  })
    .from(".one", 1.5, {
      opacity: 0,
      y: 10
    })
    .from(".two", 1.5, {
      opacity: 0,
      y: 10
    })
    .to(".one",
      1.5,
      {
        opacity: 0,
        y: 10
      },
    "+=3.5")
    .to(".two",
      1.5,
      {
        opacity: 0,
        y: 10
      },
    "-=1")
    .from(".three", 1.5, {
      opacity: 0,
      y: 10
    })
    .to(".three",
      1.5,
      {
        opacity: 0,
        y: 10
      },
    "+=3")
    .from(".four", 1.5, {
      scale: 0.2,
      opacity: 0,
    })
    
    .staggerTo(
      ".hbd-chatbox span",
      2, {
        visibility: "visible",
      },
      0.1
    )

    .to(
      ".four",
      0.5, {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
    "+=1")
    .from(".idea-1", 1, ideaTextTrans)
    .to(".idea-1", 1, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 1, ideaTextTrans)
    .to(".idea-2", 1, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 1, ideaTextTrans)
    .to(".idea-3 strong", 0.8, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 1, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 1, ideaTextTrans)
    .to(".idea-4", 1, ideaTextTransLeave, "+=2.5")
    .from(
      ".idea-5",
      0.7, {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=1.5"
    )
    .to(
      ".idea-5 span",
      1, {
        rotation: 90,
        x: 8,
      },
      "+=1.4"
    )
    .to(
      ".idea-5",
      1, {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      1, {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      1, {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1.5"
    )
    .staggerFromTo(
      ".baloons img",
      2.5, {
        opacity: 0.9,
        y: 1400,
      }, {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".collage-picture",
      0.5, {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )

    .staggerFrom(
      ".wish-hbd span",
      0.7, {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7, {
        scale: 1.4,
        rotationY: 150,
      }, {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5, {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5, {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 1, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      1, {
        rotation: 90,
      },
      "+=1"
    );

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", (event) => {
  // Prevent event from propagating further
    event.stopPropagation();
    tl.restart();
  });

}

const fetchData = () => {
  fetch("customize.json")
    .then(data => data.json())
    .then(data => {
      Object.keys(data).map(customData => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};


