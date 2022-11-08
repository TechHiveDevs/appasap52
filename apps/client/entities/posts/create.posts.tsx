
import { 
  Create,
  SimpleForm,
  
required,
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreatePosts(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="title" variant="outlined" validate={required()}  />
<ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
