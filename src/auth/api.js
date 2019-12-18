import apiUrl from '../apiConfig'
import axios from 'axios'

// Sign Up
export const signUp = credentials => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-up',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation
      }
    }
  })
}

// Sign In
export const signIn = credentials => {
  return axios({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    }
  })
}

// Sign Out
export const signOut = user => {
  return axios({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    }
  })
}

// Change Password
export const changePassword = (passwords, user) => {
  return axios({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    }
  })
}

// Show All Programs
export const getAllProgram = () => {
  return axios.get(`${apiUrl}/api/programs`)
}

 // Delete Program By ID
 export const deleteProgramByID = function(id,userId) {
 return axios.delete(`${apiUrl}/api/programs/${id}`);
}

  // Add program
  export const addProgram = (program, user) => {
    return axios({
      url: apiUrl + '/api/programs',
      method: 'POST',
      headers: {
        // 'Authorization': `Bearer ${user.token}` // FOR EXPRESS
        // ‘Authorization’: `Token ${user.token}` // FOR RAILS
      },
      data: {
        program: program
      }
    })
  }

//Edit Program 

export const editProgramById = function (program,user) {
  return axios({
    url: `${apiUrl}/api/programs/${program.id}`,
    method: 'PATCH',
    data: {
      program: program
    }
  })
}
