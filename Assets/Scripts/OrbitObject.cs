using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "Orbit", menuName = "ScriptableObjects/OrbitObject")]
public class OrbitObject : ScriptableObject
{
    public GameObject Object;
    public Vector3 Rotation;
    public Vector3 DistanceFromOrigin;
    public float OrbitSpeed;
    public float RotationSpeed;    
}
