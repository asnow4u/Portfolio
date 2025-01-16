using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OrbitController : MonoBehaviour
{
    [SerializeField] private List<OrbitObject> orbitObjects = new List<OrbitObject>();
    private List<(int, GameObject)> pivotObjects = new List<(int, GameObject)>();

    void Start()
    {
        for (int i = 0; i < orbitObjects.Count; i++)
        {
            GameObject pivot = new GameObject("Pivot");
            pivot.transform.parent = transform;         
            pivot.transform.position = Vector3.zero;
            pivot.transform.rotation = Quaternion.Euler(orbitObjects[i].Rotation);
            pivotObjects.Add((i, pivot));            

            GameObject go = Instantiate(orbitObjects[i].Object, pivot.transform);
            go.transform.position += orbitObjects[i].DistanceFromOrigin;
        }
    }

    
    void FixedUpdate()
    {
        foreach ((int, GameObject) obj in pivotObjects)
        {
            GameObject pivot = obj.Item2;
            int index = obj.Item1;

            float orbitSpeed = orbitObjects[index].OrbitSpeed * Time.fixedDeltaTime;

            pivot.transform.rotation = Quaternion.AngleAxis(orbitSpeed, pivot.transform.up) * pivot.transform.rotation;
        }
    }
}
