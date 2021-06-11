import { Root } from "./components/Root/Root";
import { DataProvider } from "./providers/DataProvider";
import { EditingProvider } from "./providers/EditingProvider";
import { CategoryForm } from "./components/CategoryForm/CategoryForm";
import { ModalProvider } from "react-modal-hook";

export const App = () => {
  return (
    <EditingProvider>
      <DataProvider>
        <ModalProvider>
          <Root />
        </ModalProvider>
      </DataProvider>
    </EditingProvider>
  );
};
