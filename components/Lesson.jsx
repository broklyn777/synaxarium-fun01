import ResponsivePlayer from "@/components/ResponsivePlayer";
import { useState } from "react";

const Lesson = () => {
  const [watchComplete, setwatchComplete] = useState(false);

  const handleWatchComplete = (state) => {
    console.log(state);
  };

  return (
    <div>
      <ResponsivePlayer
        url="https://youtu.be/lCra8jUrlUQ"
        onProgress={handleWatchComplete}
      />
    </div>
  );
};
export default Lesson;
