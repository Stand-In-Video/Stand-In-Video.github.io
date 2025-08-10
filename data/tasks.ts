// data/tasks.ts

export type ShowcaseExample = {
  id: number;
  portraitSrc?: string;
  prompt?: string;
  loraName?: string;
  sourceVideoSrc?: string;
  poseVideoSrc?: string;
  firstFrameSrc?: string;
  outputVideoSrc: string;
};

export const task1Data: ShowcaseExample[] = [
  {
    id: 1,
    portraitSrc: "/images/task1/1.jpg", 
    prompt: "In a corridor where the walls ripple like water, a woman reaches out to touch the flowing surface, causing circles of ripples to spread. The camera moves from a medium shot to a close-up, capturing her curious expression as she sees her distorted reflection.",
    outputVideoSrc: "/videos/task1/1.mp4", 
  },
  {
    id: 2,
    portraitSrc: "/images/task1/2.jpg",
    prompt: "A man sits comfortably at his desk, facing the camera as if engaged in a conversation with loved ones on the other side of the screen. His gaze is focused and gentle, with a natural smile on his lips. The background reveals a thoughtfully arranged personal space, with photos and a world map on the wall, conveying a sense of intimate and modern communication.",
    outputVideoSrc: "/videos/task1/2.mp4",
  },
  {
    id: 3,
    portraitSrc: "/images/task1/3.jpg",
    prompt: "A woman crouches in a vibrant vegetable garden, having just picked a ripe tomato. At this moment, she looks up and gazes directly into the camera, her face glowing with the joy and satisfaction of the harvest. The soft morning light gently falls on her and the surrounding green leaves, filling the scene with a sense of natural, healthy living.",
    outputVideoSrc: "/videos/task1/3.mp4",
  },
  {
    id: 4,
    portraitSrc: "/images/task1/4.jpg",
    prompt: "A man in a white lab coat stands in front of a laboratory bench. Having just completed a critical step, he turns toward the camera, his eyes shining with the excitement of discovery. The background is filled with precise instruments and an array of beakers and test tubes, capturing the rigor and allure of scientific exploration.",
    outputVideoSrc: "/videos/task1/4.mp4",
  },
  {
    id: 5,
    portraitSrc: "/images/task1/5.jpg",
    prompt: "A graceful young woman sits in front of an easel, holding a paintbrush. She alternates between thoughtfully examining her work and leaning in to add delicate details.",
    outputVideoSrc: "/videos/task1/5.mp4",
  },
  {
    id: 6,
    portraitSrc: "/images/task1/6.jpeg",
    prompt: "A young man dressed in traditional attire draws the long sword from his waist and begins to wield it. The blade flashes with light as he moves—his eyes sharp, his actions swift and powerful, with his flowing robes dancing in the wind.",
    outputVideoSrc: "/videos/task1/6.mp4",
  },
  {
    id: 7,
    portraitSrc: "/images/task1/7.jpg",
    prompt: "The video features a man with dark-haired hair, wearing a blue tank top and holding a pink tank top on a hanger. he appears to be in a clothing store or a similar retail environment, as there are racks of clothes visible in the background. The man is speaking to the camera, possibly providing a review or discussing the tank top he is holding. He has colorful bracelets on his wrist and is wearing a necklace with multiple beads. his expression suggests he is engaged in a conversation or presentation. The setting seems to be indoors, with artificial lighting illuminating the scene.",
    outputVideoSrc: "/videos/task1/7.mp4",
  },
  {
    id: 8,
    portraitSrc: "/images/task1/8.png",
    prompt: "The video features a man standing at an easel, focused intently as his brush dances across the canvas. His expression is one of deep concentration, with a hint of satisfaction as each brushstroke adds color and form. He wears a paint-splattered apron, and his hands move with confident precision. The setting, filled with scattered art supplies, open paint tubes, and unfinished sketches pinned to the wall, suggests an artist's studio. A large window on one side allows sunlight to stream in, casting a soft glow across the room and illuminating the colors on his canvas. The atmosphere is creative and inspired, with the man's intense focus and the lively colors on the canvas indicating a moment of artistic passion and expression.",
    outputVideoSrc: "/videos/task1/8.mp4",
  },
  {
    id: 9,
    portraitSrc: "/images/task1/9.jpg",
    prompt: "The video features a news reporter who is walking down a city street at night while holding a microphone and speaking to the camera. The reporter is wearing a white coat and a blue tie, and he appears to be reporting on a story related to the economy. The background shows a brightly lit cityscape with tall buildings and streetlights, creating a vibrant and dynamic atmosphere. The reporter's speech is accompanied by various text overlays that provide additional information about the story, such as \"\"Global Economic Forum\"\" and \"\"Economy is Growing Fast, Sure Global Rebound.\"\" These text elements suggest that the reporter is discussing economic trends and forecasts. Overall, the video captures a moment of news reporting in an urban setting, with the reporter providing insights into the state of the global economy.",
    outputVideoSrc: "/videos/task1/9.mp4",
  },
  {
    id: 10,
    portraitSrc: "/images/task1/10.jpg",
    prompt: "The video features a girl painting on a large canvas in a bright studio. She is wearing a paint-splattered apron and has her hair tied up in a bun. The studio is filled with art supplies and colorful paintings on the walls. She concentrates intently on her work, adding brushstrokes to her canvas as soft music plays in the background, creating an inspiring and creative atmosphere.",
    outputVideoSrc: "/videos/task1/10.mp4",
  },
  {
    id: 11,
    portraitSrc: "/images/task1/11.png",
    prompt: "The video shows a man sitting on a park bench under a large oak tree, reading a book. He has a beard and is wearing a casual sweater and jeans. The park is quiet and green, with sunlight filtering through the tree branches. The man seems completely absorbed in his book, occasionally glancing up to enjoy the peaceful surroundings.",
    outputVideoSrc: "/videos/task1/11.mp4",
  },
  {
    id: 12,
    portraitSrc: "/images/task1/12.jpg",
    prompt: "The video features a woman sitting in a cozy armchair in a library. She is wearing glasses and a knitted sweater, with her legs tucked up under her. She is reading a book, and the warm light from a nearby lamp casts a soft glow on her face. The shelves around her are filled with books, and the atmosphere is calm and intellectual, with the occasional sound of pages turning.",
    outputVideoSrc: "/videos/task1/12.mp4",
  },
  {
    id: 13,
    portraitSrc: "/images/task1/13.jpg",
    prompt: "The video features a woman standing in front of a large screen displaying the words \"\"Tech Minute\"\" and the logo for CNET. She is wearing a purple top and appears to be presenting or speaking about technology-related topics. The background includes a cityscape with tall buildings, suggesting an urban setting. The woman seems to be engaged in a discussion or providing information on technology news or trends. The overall atmosphere is professional and informative, likely aimed at educating viewers about the latest developments in the tech industry.",
    outputVideoSrc: "/videos/task1/13.mp4",
  },
  {
    id: 14,
    portraitSrc: "/images/task1/14.jpg",
    prompt: "A young man, a streamer, is wearing a green sleeveless top and red headphones. The background is illuminated by vibrant neon lights.The setting is a well-lit room with a curtain and a lamp visible in the background. His expression and body language suggest that he is speaking passionately into the microphone.",
    outputVideoSrc: "/videos/task1/14.mp4",
  },
  {
    id: 15,
    portraitSrc: "/images/task1/15.png",
    prompt: "A man gently clutching a bouquet of vibrant flowers, his eyes radiating a serene contentment as he glances at the camera. His slightly upturned lips convey a sense of calm joy, accompanied by a faint twinkle in his eye. The scene is set in a lush garden, brimming with colorful blooms and verdant foliage, creating a tranquil haven. The shot captures him from the waist up, emphasizing his relaxed stance and the natural harmony of his surroundings.",
    outputVideoSrc: "/videos/task1/15.mp4",
  },
  {
    id: 16,
    portraitSrc: "/images/task1/16.png",
    prompt: "A woman is sitting in front of a pottery wheel, her hands covered in wet clay. She pauses her work and looks up at the camera, her face beaming with a proud smile as she displays the pottery she has just shaped. In the background, shelves are filled with ceramic works and tools.",
    outputVideoSrc: "/videos/task1/16.mp4",
  },
];


export const task2Data: ShowcaseExample[] = [
  {
    id: 1,
    portraitSrc: "/images/task2/1.png",
    prompt: "A chibi-style boy speeding on a skateboard, holding a detective novel in one hand. The background features city streets, with trees, streetlights, and billboards along the roads.",
    outputVideoSrc: "/videos/task2/1.mp4",
  },
  {
    id: 2,
    portraitSrc: "/images/task2/2.png",
    prompt: "The video features an anime girl standing on a busy street, surrounded by a hurried crowd. The buildings and shops in the background create a classic cityscape. The girl smiles as she puts her headphones on, her movements smooth and natural. Her expression is playful and relaxed, as if she's about to immerse herself in her favorite music. The camera focuses on her face, capturing her joyful expression and vibrant energy. The background is slightly blurred, emphasizing the contrast between her and her surroundings, creating a sense of relaxed urban living.",
    outputVideoSrc: "/videos/task2/2.mp4",
  },
  {
    id: 3,
    portraitSrc: "/images/task2/3.png",
    prompt: "Shot in a medium shot of a brightly lit room, a girl, approximately seven or eight years old, stands in the center. She has long black hair and wears a light blue dress, her expression focused and gentle. Holding a doll in both hands, she presents her beloved toy to the camera. As the camera slowly zooms in, the details of her face are clearly visible: the soft fabric, the delicate stitching, and the slightly upturned corners of her mouth are all captured. The entire scene is filled with childlike innocence and warmth.",
    outputVideoSrc: "/videos/task2/3.mp4",
  },
  {
    id: 4,
    portraitSrc: "/images/task2/4.jpg",
    prompt: "In a snow-covered forest on a winter's day, snow is falling. An anime girl stands quietly. With a gentle smile on her face, she looks towards the viewer. Then, she scoops up the snow and smiles.",
    outputVideoSrc: "/videos/task2/4.mp4",
  },
];

// --- Task 3 Data ---
export type StylizedResult = {
  name: string; // e.g., "Ghibli LoRA"
  videoSrc: string;
};

export type StylizedShowcaseItem = {
  id: number;
  portraitSrc: string;
  prompt: string;
  styles: StylizedResult[];
};

export const task3Data: StylizedShowcaseItem[] = [
  {
    id: 1,
    portraitSrc: "/images/task3/1.png", 
    prompt: "A woman sits on a boat, gazing at the camera with a gentle smile. Behind her is the endless sea, waves crashing against the side of the boat, and a lighthouse in the distance stands tall under the bright sky.", 
    styles: [
      { name: "Original", videoSrc: "/videos/task3/1.mp4" }, 
      { name: "Ghibli LoRA", videoSrc: "/videos/task3/2.mp4" }, 
      { name: "Redline LoRA", videoSrc: "/videos/task3/3.mp4" }, 
    ],
  },
];

// --- Task 4 Data ---
export type FaceSwapResult = {
  portraitSrc: string; // 新身份的肖像
  outputVideoSrc: string; // 对应的输出视频
};

export type FaceSwapShowcaseItem = {
  id: number;
  sourceVideoSrc: string; // 唯一的原始视频
  swaps: FaceSwapResult[]; // 可用的换脸选项
};


// --- Task 4 Data ---
export const task4Data: FaceSwapShowcaseItem[] = [
  {
    id: 1,
    sourceVideoSrc: "/videos/task4/1.mp4", // 替换为你的原始视频
    swaps: [
      {
        portraitSrc: "/images/task4/1.webp", // 替换为你的肖像图片
        outputVideoSrc: "/videos/task4/2.mp4", // 替换为你的生成视频
      },
      {
        portraitSrc: "/images/task4/2.png", // 替换为你的肖像图片
        outputVideoSrc: "/videos/task4/3.mp4", // 替换为你的生成视频
      }
    ],
  },
  {
    id: 3,
    sourceVideoSrc: "/videos/task4/6.mp4", // 替换为你的原始视频
    swaps: [
      {
        portraitSrc: "/images/task4/4.png", // 替换为你的肖像图片
        outputVideoSrc: "/videos/task4/7.mp4", // 替换为你的生成视频
      }
    ],
  },
];

// --- Task 5 Data ---
export type PoseResult = {
  id: number;
  firstFrameSrc: string; // 每个输出结果对应的首帧
  outputVideoSrc: string; // 生成的视频
};

export type PoseShowcaseItem = {
  id: number;
  poseVideoSrc: string; // 共享的姿态视频
  results: PoseResult[]; // 基于该姿态的多个输出结果
};


// --- Task 5 Data ---
// 请注意，我们现在使用的是新的数据结构 PoseShowcaseItem
export const task5Data: PoseShowcaseItem[] = [
  {
    id: 1,
    poseVideoSrc: "/videos/task5/1.mp4", // 替换为你的姿态视频
    results: [
      {
        id: 1,
        firstFrameSrc: "/images/task5/11.png", // 替换为你的首帧图片
        outputVideoSrc: "/videos/task5/11.mp4",     // 替换为你的生成视频
      },
      {
        id: 2,
        firstFrameSrc: "/images/task5/12.png",
        outputVideoSrc: "/videos/task5/12.mp4",
      },
    ],
  },
  {
    id: 2,
    poseVideoSrc: "/videos/task5/2.mp4", // 替换为你的姿态视频
    results: [
      {
        id: 1,
        firstFrameSrc: "/images/task5/21.png", // 替换为你的首帧图片
        outputVideoSrc: "/videos/task5/21.mp4",     // 替换为你的生成视频
      },
      {
        id: 2,
        firstFrameSrc: "/images/task5/22.png",
        outputVideoSrc: "/videos/task5/22.mp4",
      },
    ],
  },
];

