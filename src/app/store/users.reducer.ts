import { UsersActions } from '../actions/users.actions';
import { User } from '../model/user';

const INITIAL_STATE: User[] = [{	
     "ID":1,
		"Name": "Test1",		
		"Email": "frehn0@nasa.gov",
		"Phone Number": "751-527-6224",
    "Product Name": "Doll",		
		"Rating": "Good",
		"Last Used": "3 months back"
	},
	{
    "ID":2,
	"Name": "Test2",		
		"Email": "Test2@nasa.gov",
		"Phone Number": "123-456-789",
    "Product Name": "Phone",		
		"Rating": "Excellent",
		"Last Used": "Within 12 months"
	}];

export function UsersReducer (
  state: User[] = INITIAL_STATE, action: any
  ): any {

  switch (action.type) {
    case UsersActions.USER_ADD:
      return [...state, action.payload];

    case UsersActions.USER_DELETE:
      return state.filter(({ id }) => id !== action.payload);

    default:
      return [...state];
  }
}

