import { Text } from "@mantine/core";
import { Icon } from "@iconify/react";

export const Home = () => {
  // DRAW
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="flex flex-col gap-1 text-left">
        <div className="flex items-end gap-2">
          <Icon icon="line-md:coffee-half-empty-twotone-loop" height={50} />
          <Text
            className="text-4xl"
            fw={900}
            variant="gradient"
            gradient={{ from: "indigo", to: "blue", deg: 105 }}
          >
            imPOSTer
          </Text>
        </div>
        <Text size="lg" c="dimmed">
          Seamless Mocking for Developers
        </Text>
      </div>
      <div className="absolute left-auto right-auto text-center bottom-2">
        <Text size="sm" c="dimmed">
          Under Construction...
          <br />
          We’re Building Like Busy Beavers!
        </Text>
      </div>
    </div>
  );
};
