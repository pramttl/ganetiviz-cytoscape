#!/usr/bin/python

# Test to be run after starting devserver.
# os.system(".././devserver.sh")
# ---------------------------
# $ python selenium-tests.py
# ---------------------------

import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
import os


def check_help_status(driver):
    help_status = driver.execute_script("return window.GANETIVIZ_HELP_MODE")
    return help_status

driver = webdriver.Firefox()
driver.get("http://localhost:2600")

html_document = driver.find_element_by_xpath("/html")
helpdiv = driver.find_element_by_id("help-div")

# Checking if title is Ok.
assert "Ganeti Cluster Mapping" in driver.title

# Checking if help appears on clicking on a help-div
helpdiv.click();
assert check_help_status(driver) == True

# Checking if help toggles back to off on clicking on help-div.
helpdiv.click();
assert check_help_status(driver) == False

# Checking if pressing the 'h' key opens the help
html_document.send_keys('h')
assert check_help_status(driver) == True

# Checking if panning works fine.
html_document.send_keys(Keys.ARROW_LEFT)
html_document.send_keys(Keys.ARROW_LEFT)
html_document.send_keys(Keys.ARROW_RIGHT)
html_document.send_keys(Keys.ARROW_RIGHT)
html_document.send_keys(Keys.ARROW_UP)
html_document.send_keys(Keys.ARROW_UP)
html_document.send_keys(Keys.ARROW_DOWN)
html_document.send_keys(Keys.ARROW_DOWN)
# Question - How to assert whether the check works fine.

# Todo: Looking for an answer to-
# http://stackoverflow.com/questions/18436248/writing-selenium-tests-for-cytoscape-js-applications-locating-nodes-edges

driver.close()
