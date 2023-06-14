import withAuth from '../hoc/withAuth';

const ProtectedRoute = (props) => {
  return <div>PROTECTED ROUTE</div>;
};

export default withAuth(ProtectedRoute);