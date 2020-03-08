export const getFixedValuesFromTotalRotation = (
  totalRotation: number,
  numberOfElements: number,
) => {
  /*
   * Normalize values for cases where the rotation is greater than 1 whole circle
   * Create a variable containing a value for the number of additional rotations that have occured
   */
  let additionalRotations = 0;
  if (Math.abs(totalRotation) > (13 / 6) * Math.PI) {
    while (Math.abs(totalRotation) > 2 * Math.PI) {
      additionalRotations++;
      if (totalRotation > 0) {
        totalRotation -= 2 * Math.PI;
      } else {
        totalRotation += 2 * Math.PI;
      }
    }
  }

  const stepAngle = (2 * Math.PI) / numberOfElements;
  // create array of rotation values (each rotation value represents an icon on the wheel)
  let rotationValues = [];
  for (let i = 0; i < numberOfElements; i++) {
    rotationValues.push({ i, distanceFromZero: 0 });
  }
  // calculate distance from 0 (centre) point for each rotation value based on the stepAngle
  rotationValues.forEach(value => {
    value.distanceFromZero = totalRotation + value.i * stepAngle;
    if (value.distanceFromZero > Math.PI) {
      while (value.distanceFromZero > Math.PI) {
        value.distanceFromZero -= 2 * Math.PI;
      }
    } else if (value.distanceFromZero < -Math.PI) {
      while (value.distanceFromZero < -Math.PI) {
        value.distanceFromZero += 2 * Math.PI;
      }
    }
  });
  // calculate which icon to snap to.
  // whichever icon has the rotation amount nearest to zero should end up as the zero point

  let rotationValueClosestToZero = {
    i: NaN,
    distanceFromZero: NaN,
  };
  rotationValues.forEach(value => {
    if (value.i === 0) {
      rotationValueClosestToZero = value;
    } else {
      if (
        Math.abs(value.distanceFromZero) <
        Math.abs(rotationValueClosestToZero.distanceFromZero)
      ) {
        rotationValueClosestToZero = value;
      }
    }
  });
  const rotationToReturn =
    totalRotation > 0
      ? totalRotation -
        rotationValueClosestToZero.distanceFromZero +
        2 * Math.PI * additionalRotations
      : totalRotation -
        rotationValueClosestToZero.distanceFromZero -
        2 * Math.PI * additionalRotations;

  // calculate number of steps from the rotation amount
  const steps = rotationToReturn / stepAngle;

  return {
    rotation: rotationToReturn,
    steps,
  };
};
