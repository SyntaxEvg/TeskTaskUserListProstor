import Navbar from '@components/Nav';
import Footer from '@components/Footer';
 
export const metadata = {
  title: "Test Task",
  description: "Test Task",
};
export default function Layout({ children }) {
  return (
       <div className='container mx-auto bg-gray-100'>{children}</div>
  );
}