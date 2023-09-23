import React, { useState, useEffect, useRef } from "react";

const data = [
  {
    title: "Item 1",
    subItems: ["Subitem 1", "Subitem 2", "Subitem 3"],
  },
  {
    title: "Item 2",
    subItems: ["Subitem 4", "Subitem 5"],
  },
  {
    title: "Item 3",
    subItems: ["Subitem 6"],
  },
];
const Media = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [subSelectedIndex, setSubSelectedIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const itemRefs = useRef<Array<HTMLDivElement | null | any>>([]);

  useEffect(() => {
    if (itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex].focus();
    }
  }, [selectedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" && selectedIndex < data.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (e.key === "ArrowUp" && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (
      e.key === "ArrowRight" &&
      subSelectedIndex < data[selectedIndex].subItems.length - 1
    ) {
      setSubSelectedIndex(subSelectedIndex + 1);
    } else if (e.key === "ArrowLeft" && subSelectedIndex > 0) {
      setSubSelectedIndex(subSelectedIndex - 1);
    } else if (e.key === "Enter") {
      setShowToast(true);
    }
  };

  return (
    <div className="App">
      <div className="list">
        {data.map((item, index) => (
          <div
            key={index}
            className={`item ${selectedIndex === index ? "focused" : ""}`}
            onKeyDown={(e) => handleKeyDown(e)}
            ref={(el) => (itemRefs.current[index] = el)}
            tabIndex={0}
          >
            {item.title}
            <div className="sublist">
              {item.subItems.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  className={`subitem ${
                    selectedIndex === index && subSelectedIndex === subIndex
                      ? "focused"
                      : ""
                  }`}
                  onClick={() => setShowToast(true)}
                >
                  {subItem}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {showToast && <div className="toast">{data[selectedIndex].title}</div>}
    </div>
  );
};

export default Media;
