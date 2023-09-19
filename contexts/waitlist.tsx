import {useContext, useReducer, createContext} from 'react'

type Select = {
    label: string,
    value: string
}

interface WaitListContextType {
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    country?: Select;
    primarySkill?: Select;
    yearsOfExperience: string | undefined;
    language?: Select;
    githubProfileLink: string | undefined;
    resume: File | undefined;
    referalSource: string | undefined;
    dispatch: React.Dispatch<ACTIONTYPE>
}

type ACTIONTYPE =
    | {type: "update_first_name"; payload: string}
    | {type: "update_last_name"; payload: string}
    | {type: "update_email"; payload: string}
    | {type: "update_language"; payload: Select}
    | {type: "update_gh_link"; payload: string}
    | {type: "update_resume"; payload: File}
    | {type: "update_primary_skill"; payload: Select}
    | {type: "update_years_of_exp"; payload: string}
    | {type: "update_country"; payload: Select}
    | {type: "update_referal_source"; payload: string}
    | {type: "clear"}


const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    yearsOfExperience: '',
    githubProfileLink: '',
    referalSource: '',
    resume: undefined
};

function waitlistReducer(state: typeof initialValues, action: ACTIONTYPE) {
    switch (action.type) {
        case 'update_first_name': {
            return {
                ...state,
                firstName: action.payload,
            };
        }
        case 'update_last_name': {
            return {
                ...state,
                lastName: action.payload,
            };
        }
        case 'update_country': {
            return {
                ...state,
                country: action.payload,
            };
        }
        case 'update_email': {
            return {
                ...state,
                email: action.payload,
            };
        }
        case 'update_gh_link': {
            return {
                ...state,
                githubProfileLink: action.payload,
            };
        }
        case 'update_language': {
            return {
                ...state,
                language: action.payload,
            };
        }
        case 'update_primary_skill': {
            return {
                ...state,
                primarySkill: action.payload,
            };
        }
        case 'update_years_of_exp': {
            return {
                ...state,
                yearsOfExperience: action.payload,
            };
        }
        case 'update_referal_source': {
            return {
                ...state,
                referalSource: action.payload,
            };
        }
        case 'clear': {
            return {
                ...initialValues
            };
        }


    }
    throw Error('Unknown action ' + action.payload);
}

const WaitListContext = createContext<WaitListContextType | null>(null)

const Waitlist = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(waitlistReducer, initialValues);

    return (
        <WaitListContext.Provider value={{...state, dispatch}}>{children}</WaitListContext.Provider>
    )
}

export const useWaitlistContext = () => {
    const context = useContext(WaitListContext);
    if (!context) {
        throw new Error('Component must be wrapped with the WaitListProvider');
    }
    return context;
}

export default Waitlist