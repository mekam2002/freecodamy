import React from "react";
import Box from "@mui/material/Box";
import AppButton from "../../components/button/AppButton";
import { firestoreDb } from "../../service/firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import Loader from "../../components/Loader/Loader";
import { Stack } from "@mui/material";

const data = {
  id: uuidv4(),
  title: "Components: Building Blocks of UI",
  description:
    "At the heart of React lies the concept of components. Components are like Lego bricks that you can piece together to create your application's user interface.",
  duration: "15 mins",
  rating: 20,
  tags: ["React", "Web Development", "Beginner"],
  courseId: uuidv4(),
};

const courseList = {
  courseid: "c656fdfd-1aa0-4a5c-b8dd-3110d83f9805",
  course: [
    {
      title: "",
      description: `Imagine you're building a virtual house. In this virtual world, your house is made up of different parts: walls, doors, windows, a roof, and so on. Now, think of each of these parts as a separate "component.`,
      imagePath: "",
      codeblock: "",
      children: [],
    },

    {
      title: "",
      description: `In React.js, a component is like one of these parts of your virtual house. It's a self-contained piece of your user interface that can be reused and combined to build more complex user interfaces, just like you can reuse doors, windows, and walls to create different kinds of houses.`,
      imagePath: "",
      codeblock: "",
      children: [],
    },

    {
      title: "",
      description: `Let's break it down a bit further:`,
      imagePath: "",
      codeblock: "",
      children: [
        {
          title: "Reusability",
          descrition:
            " In your virtual house, you wouldn't want to rebuild the same door or window every time you need one. Similarly, in React, you create components to encapsulate a specific piece of functionality or UI element. Once you've built a component, you can reuse it in different parts of your application without having to rewrite the same code",
        },
        {
          title: "Isolation",
          descrition:
            "Each component in React works like a self-contained module. This isolation is like how the roof of your virtual house is separate from the walls. Components don't interfere with each other's functionality, making it easier to manage and maintain your code",
        },
        {
          title: "Composition",
          descrition:
            "Just as you can combine walls, doors, and windows in different ways to create unique houses, in React, you can combine components to create complex user interfaces. You build your app by arranging and nesting these components, which allows you to create rich, interactive, and dynamic applications",
        },
        {
          title: "Hierarchy",
          descrition:
            "Think of your virtual house having a structure where rooms are inside the house, and the house itself is part of a neighborhood. Similarly, in React, you can create a hierarchy of components. A larger component can be composed of smaller components, forming a tree-like structure that represents your application's UI.",
        },
        {
          title: "Props",
          descrition:
            "Imagine you want to customize the color of your doors or windows in your virtual house. You'd pass specific details like color or size to each part. In React, components can receive information called props (short for properties) that allow you to customize how a component looks or behaves.",
        },
        {
          title: "State",
          descrition:
            "Sometimes, parts of your house might change, like a door opening or closing. Similarly, in React, components can have an internal state that can change over time. This allows your UI to react to user interactions or external events",
        },
        {
          title: "",
          description: `Remember, just as in your virtual house, a well-organized and thoughtful arrangement of components in React can make your application easier to build, maintain, and expand`,
          imagePath: "",
          codeblock: "",
          children: [],
        },
      ],
    },
    {
      title: "",
      description: `Remember, just as in your virtual house, a well-organized and thoughtful arrangement of components in React can make your application easier to build, maintain, and expand`,
      imagePath: "",
      codeblock: "",
      children: [],
    },
  ],
};
export default function Home() {
  const addHandler = async () => {
    await setDoc(doc(firestoreDb, "course", uuidv4()), data);
  };

  const addCourse = async () => {
    await setDoc(
      doc(firestoreDb, "courseList", "17401b98-92a0-4502-94a3-c98d18bc8446"),
      courseList
    );
  };
  return <Loader />;
}
