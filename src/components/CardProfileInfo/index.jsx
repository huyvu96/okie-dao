import { Avatar, Card, Statistic } from 'antd';
import './CardProfileInfo.scss';
const CardProfileInfo = ({ className, title, icon, value, type }) => {
  const getStyle = (type) => {
    switch (type) {
      case 1:
        return {
          background: '#F5FCF9',
          avatarBackground: '#E5F6EF',
          avatarColor: '#45CE91',
        };
      case 2:
        return {
          background: '#FFFBF1',
          avatarBackground: '#FBF0D9',
          avatarColor: '#F7931A',
        };
      case 3:
        return {
          background: '#F4F6FD',
          avatarBackground: '#E3E7FE',
          avatarColor: '#556DF6',
        };
      case 4:
        return {
          background: '#FFF6F4',
          avatarBackground: '#FFE9E3',
          avatarColor: '#FF5630',
        };

      default:
        return {};
    }
  };
  const s = getStyle(type);
  return (
    <Card {...{ className }} style={{ backgroundColor: s.background }}>
      <Avatar
        size={50}
        className="mb-[20px] wrap-icon"
        style={{ backgroundColor: s.avatarBackground }}>
        {icon}
      </Avatar>
      <Statistic className="flex flex-col-reverse" {...{ title, value }} />
    </Card>
  );
};
export default CardProfileInfo;
