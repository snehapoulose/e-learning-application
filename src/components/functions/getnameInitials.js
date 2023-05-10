import React from 'react'

export default function (name) {
    const fullName = name.split(" ");
    const firstInitial = name.charAt(0);
    const lastInitial = fullName[fullName.length - 1].charAt(0);
    return firstInitial + lastInitial;
}
