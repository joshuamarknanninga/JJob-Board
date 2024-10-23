import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_JOBS = gql`
  query allJobs {
    jobs {
      _id
      title
      company
      location
      description
      requirements
      salary
      jobType
      postedDate
      postedBy {
        _id
        username
      }
    }
  }
`;

export const GET_SAVED_JOBS = gql`
  query getSavedJobs {
    me {
      _id
      savedJobs {
        _id
        title
        company
        location
        description
        jobType
        salary
        postedDate
        postedBy {
          _id
          username
        }
      }
    }
  }
`;