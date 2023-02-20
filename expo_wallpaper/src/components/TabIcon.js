import { Badge } from "./Badge";
import { Icon } from "./Icon";

export const TabIcon = ({ visibleBadge, iconName, iconColor }) => {
  if (visibleBadge)
    return (
      <Badge fontSize={10}>
        <Icon name={iconName} size={20} color={iconColor} />
      </Badge>
    );

  return <Icon name={iconName} size={20} color={iconColor} />;
};
