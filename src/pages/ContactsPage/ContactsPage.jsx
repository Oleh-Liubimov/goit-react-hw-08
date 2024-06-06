import { useSelector } from "react-redux";
import { ContactForm } from "../../components/ContactForm/ContactForm"
import { ContactList } from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox"
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { Circles } from "react-loader-spinner";



export default function ContactsPage() {

    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError)





  return (
    <div className="root flex flex-col justify-center items-center  p-5">
      <div className=" p-5 bg-gradient-to-br from-blue-300 mb-5 rounded-lg">
        <h1 className="text-3xl mb-5 font-bold text-center">Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </div>
      {isLoading && !error && (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      <ContactList />
    </div>
  );
     

}