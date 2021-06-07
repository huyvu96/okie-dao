import classNames from 'classnames';
import fetchCommand from 'commands/fetch';
import sampleCommands from 'commands/sample';
import walletCommands from 'commands/wallet';
import { lazy, Suspense, useEffect } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { useDispatch, useStore, Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Profile from 'screens/Profile';
import Sample from 'screens/Sample';
import { common } from 'store/mutationAction';
import './translations';

const Home = lazy(() => import('./screens/Home'));
const ModalSimple = lazy(() => import('./modals/ModalSimple'));
const WalletSelectorModal = lazy(() => import('modals/WalletSelectorModal'));
const EditProfileModal = lazy(() => import('./modals/EditProfileModal'));
const AddTransactionModal = lazy(() => import('./modals/AddTransactionModal'));
const HistoryTransactionModal = lazy(() => import('./modals/HistoryTransactionModal'));
const AddCoinTokenModal = lazy(() => import('./modals/AddCoinTokenModal'));
const SubmitContent = lazy(() => import('./screens/SubmitContent'));
const NewsDetail = lazy(() => import('./screens/NewsDetail'));
const EventDetail = lazy(() => import('screens/EventDetail'));
const MissionDetail = lazy(() => import('./screens/MissionDetail'));
const AdminManagePost = lazy(() => import('./screens/AdminManagePost'));
const AdminManageEvent = lazy(() => import('./screens/AdminManageEvent'));
const AdminManageTask = lazy(() => import('./screens/AdminManageTask'));
const AdminManageRanking = lazy(() => import('./screens/AdminManageRanking'));
const AdminTaskDetails = lazy(() => import('./screens/AdminManageTaskDetail'));
const AdminEventDetails = lazy(() => import('./screens/AdminManageEventDetail'));
const Events = lazy(() => import('./screens/Events'));
const AdminSignal = lazy(() => import('./screens/AdminSignal'));
const AdminOverView = lazy(() => import('./screens/AdminOverView'));
const AdminPostDetails = lazy(() => import('./screens/AdminManagePostDetail'));
const CreateMission = lazy(() => import('./screens/CreateMission'));
const ViewAllUserModal = lazy(() => import('./modals/ViewAllUserModal'));
const History = lazy(() => import('./screens/History'));
const QuizTask = lazy(() => import('screens/DoingTask/QuizTask'));
const VideoTask = lazy(() => import('screens/DoingTask/VideoTask/VideoTask'));

function App(props) {
  const { currentTheme } = useThemeSwitcher();
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    dispatch(common());
  }, []);

  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className={classNames('h-full w-full overflow-hidden', currentTheme)}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/sample" component={Sample} />
            <Route exact path="/profile/submit-content" component={SubmitContent} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/profile/" component={Profile} />
            <Route exact path="/events/" component={Events} />
            <Route exact path="/event/:id" component={EventDetail} />
            <Route exact path="/mission/create" component={CreateMission} />
            <Route exact path="/mission/:id" component={MissionDetail} />
            <Route exact path="/news/:id" component={NewsDetail} />
            <Route exact path="/task/quiz/:id" component={QuizTask} />
            <Route exact path="/task/video/:id" component={VideoTask} />
            <Route exact path="/admin/manage/post" component={AdminManagePost} />
            <Route exact path="/admin/manage/event" component={AdminManageEvent} />
            <Route exact path="/admin/manage/task" component={AdminManageTask} />
            <Route exact path="/admin/manage/ranking" component={AdminManageRanking} />
            <Route exact path="/admin/manage/post-detail/:id" component={AdminPostDetails} />
            <Route exact path="/admin/manage/event-detail/:id" component={AdminEventDetails} />
            <Route exact path="/admin/manage/task-detail/:id" component={AdminTaskDetails} />
            <Route exact path="/admin/manage/signal" component={AdminSignal} />
            <Route exact path="/admin/manage/over-view" component={AdminOverView} />
            <Route exact path="/history" component={History} />
          </Switch>
          <ModalSimple />
          <WalletSelectorModal />
          <EditProfileModal />
          <AddTransactionModal />
          <HistoryTransactionModal />
          <AddCoinTokenModal />
          <ViewAllUserModal />
        </div>
      </Suspense>
    </Provider>
  );
}

export default App;
