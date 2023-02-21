import { Button } from "../Button";
import { Icon } from "../Icon";

export const HeaderIcon = ({ iconName, onPress }) => {
  return (
    <Button onPress={onPress}>
      <Icon name={iconName} size={28} color="black" />
    </Button>
  );
};
