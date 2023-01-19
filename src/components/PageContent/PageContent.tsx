import FailMessage from '../FailMessage/FailMessage';

interface PageContentProps {
  children: React.ReactNode;
  dataFailure: {
    hasFailed: boolean;
    message: string;
  };
}

const PageContent: React.FC<PageContentProps> = ({ children, dataFailure }) => {
  return <>{dataFailure.hasFailed ? <FailMessage message={dataFailure.message} /> : children}</>;
};

export default PageContent;
