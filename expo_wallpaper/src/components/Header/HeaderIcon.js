import { Button } from "../Button";
import { Icon } from "../Icon";

export const HeaderIcon = ({ iconName }) => {
  return (
    <Button>
      <Icon name={iconName} size={28} color="black" />
    </Button>
  );
};
